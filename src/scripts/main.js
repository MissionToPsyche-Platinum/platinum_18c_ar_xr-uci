// Dependencies
import $ from "jquery";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Modules
import "./qr.js";
import { addResources, initHUD } from "./hud.js";
import {
    addHelper,
    getDebugArrowHelper,
    getDebugBoxHelper,
    getDebugEllipsoidHelper,
    log,
} from "./util.js";
import {
    getARButton,
    getCamera,
    getDirectionalBottomLight,
    getDirectionalTopLight,
    getRenderer,
    getController,
    getRecticle,
    getRandomAsteroidButton,
    MultiClickAsteroidButton,
    ToolUpgrade,
    SensorUpgrade,
} from "./components.js";

// Stylesheets
import "../styles/index.css";
import "../styles/hud.css";

// Hyperparameters
import params from "../data/params.json";
import toolUpgradeData from "../data/tool_upgrades.json";
import sensorUpgradeData from "../data/sensor_upgrades.json";

// State Variables
// Main
let container;
let camera, scene, renderer;
let controller;
let reticle;

// Hit Test
let hitTestSource = null;
let hitTestSourceRequested = false;
let planeFound = false;

// Buttons
let buttons = [];
let triggeredButtons = [];
let buttonsSpawned = false;

// Asteroid
let asteroidGltf;
let asteroidSpawned = false;

// Upgrades
let toolUpgrades;
let sensorUpgrades;

// check for webxr session support
if ("xr" in navigator) {
    navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        if (supported) {
            //hide "ar-not-supported"
            $("#ar-not-supported").hide();
            init();
            animate();
        }
    });
}

function isReady(name, model) {
    if (!model) {
        log(`${name} is not ready`);
        return false;
    }
    return true;
}

// CALLBACKS
export function initToolUpgrades() {
    log("Initiating Tool Upgrades");
    log(Object.keys(toolUpgradeData[0]));
    toolUpgrades = toolUpgradeData.map((data) => new ToolUpgrade(data));
}

export function initSensorUpgrades() {
    log("Initiating Sensor Upgrades");
    sensorUpgrades = Object.fromEntries(
        Object.entries(sensorUpgradeData).map(([key, value]) => {
            return [key, new SensorUpgrade(value)];
        }),
    );
    log(sensorUpgrades.ASTEROID_ROTATION_SPEED.value);
}

function sessionStart() {
    planeFound = false;
    $("#tracking-prompt").show();
}

function onSelect() {
    function addAsteroid() {
        if (!isReady("Asteroid", asteroidGltf)) return;

        reticle.matrix.decompose(
            asteroidGltf.position,
            asteroidGltf.quaternion,
            asteroidGltf.scale,
        );

        const scale = 0.25;
        asteroidGltf.scale.set(scale, scale, scale);
        asteroidGltf.position.y += 0.5;
        asteroidGltf.updateWorldMatrix(true, true);
        scene.add(asteroidGltf);

        asteroidSpawned = true;
        log("Asteroid Added");
        addHelper(asteroidGltf, getDebugEllipsoidHelper());
        addHelper(scene, getDebugBoxHelper(asteroidGltf));
    }

    function replaceButton() {
        function onIntersection() {
            log("onIntersection activated!");
            function getButtonIndex(buttonArr, targetButtonMesh) {
                return buttonArr
                    .map((button) => button.mesh)
                    .indexOf(targetButtonMesh);
            }

            let timeout = 0;
            let includeTimeout = true;

            // Add Resource
            addResources(1);

            // Get hit button
            const hitButtonMesh = intersects[0].object;
            const hitButton = buttons[getButtonIndex(buttons, hitButtonMesh)];
            hitButton.onSelect();

            if (hitButton instanceof MultiClickAsteroidButton) {
                if (triggeredButtons.every((button) => button !== hitButton))
                    triggeredButtons.push(hitButton);
                else {
                    includeTimeout = false;
                }
                timeout = sensorUpgrades.MULTICLICK_TIMEOUT.value;
                log("MultiClick Detected");
            }

            log(includeTimeout);

            if (includeTimeout) {
                setTimeout(() => {
                    // Remove the hit button
                    asteroidGltf.remove(hitButtonMesh);
                    const buttonIndex = getButtonIndex(buttons, hitButtonMesh);
                    const triggeredButtonIndex = getButtonIndex(
                        triggeredButtons,
                        hitButtonMesh,
                    );
                    log(`${buttonIndex}, ${triggeredButtonIndex}`);
                    if (buttonIndex > -1) buttons.splice(buttonIndex, 1);
                    if (triggeredButtonIndex > -1)
                        triggeredButtons.splice(triggeredButtonIndex, 1);
                    log(`Button removed! Spawning new one.`);
                    // Spawn a new button at random position
                    spawnRandomButton();
                }, timeout);
            }
        }

        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(controller.matrixWorld);

        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        addHelper(scene, getDebugArrowHelper(raycaster));

        const intersects = raycaster.intersectObjects(
            buttons.map((button) => button.mesh),
        );

        log(`Ray Casted!\nLength: ${intersects.length}`);
        if (intersects.length > 0) onIntersection();
    }

    if (!asteroidSpawned) addAsteroid();
    else replaceButton();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function spawnRandomButton() {
    if (!isReady("Asteroid", asteroidGltf)) return false;

    log("Spawning button...");
    const button = getRandomAsteroidButton(
        sensorUpgrades.MULTICLICK_SPLIT.value,
    );
    const buttonMesh = button.mesh;

    // LOCAL ellipsoid radii
    const [rX, rY, rZ] = params.ASTEROID_RADIUS;

    // Random direction on unit sphere
    const dir = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
    ).normalize();

    // Project direction onto ellipsoid surface
    const localPosition = new THREE.Vector3(dir.x * rX, dir.y * rY, dir.z * rZ);

    // Sink slightly INTO the asteroid
    const inset = 0.08;
    localPosition.addScaledVector(dir, -inset);

    // Apply local position
    buttonMesh.position.copy(localPosition);

    // attach to ASTEROID
    asteroidGltf.add(buttonMesh);
    buttons.push(button);
    log("Button spawned (local, asteroid child)");

    return true;
}

function fillRandomButtons(max) {
    let success = true;
    if (max - buttons.length === 0) return success;
    log(`Filling from ${buttons.length} to ${max}`);

    for (let i = buttons.length; i < max; i++) {
        if (!spawnRandomButton()) success = false;
    }
    return success;
}

// MAIN FUNCTIONS
function init() {
    container = $("<div>").appendTo("body");

    scene = new THREE.Scene();
    camera = getCamera();
    renderer = getRenderer(sessionStart);
    controller = getController(renderer, onSelect);
    reticle = getRecticle();

    scene.add(getDirectionalTopLight());
    scene.add(getDirectionalBottomLight());
    scene.add(controller);
    scene.add(reticle);

    const loader = new GLTFLoader();
    loader.load("psyche.glb", (gltf) => {
        // Center asteroid
        const tempGltf = gltf.scene;
        const box = new THREE.Box3().setFromObject(tempGltf);
        const center = box.getCenter(new THREE.Vector3());
        const modelWrapper = new THREE.Object3D();
        tempGltf.position.sub(center);
        modelWrapper.add(tempGltf);
        // Assign result
        asteroidGltf = modelWrapper;
    });

    container.append(renderer.domElement);
    $("body").append(getARButton(renderer));
    $(window).on("resize", onWindowResize);
}

function render(timestamp, frame) {
    if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (hitTestSourceRequested === false) {
            session.requestReferenceSpace("viewer").then((referenceSpace) => {
                session
                    .requestHitTestSource({ space: referenceSpace })
                    .then((source) => {
                        hitTestSource = source;
                    });
            });

            session.addEventListener("end", () => {
                hitTestSourceRequested = false;
                hitTestSource = null;
            });

            hitTestSourceRequested = true;
        }

        if (hitTestSource) {
            const hitTestResults = frame.getHitTestResults(hitTestSource);

            if (hitTestResults.length) {
                if (!planeFound) {
                    planeFound = true;
                    $("#tracking-prompt").hide();
                    $("#instructions").show();
                }
                const hit = hitTestResults[0];
                if (!asteroidSpawned) {
                    reticle.visible = true;
                    reticle.matrix.fromArray(
                        hit.getPose(referenceSpace).transform.matrix,
                    );
                }
                // Spawn initial buttons after asteroid is spawned
                if (asteroidSpawned && !buttonsSpawned) {
                    initToolUpgrades();
                    initSensorUpgrades();
                    initHUD(toolUpgrades, sensorUpgrades);
                    buttonsSpawned = fillRandomButtons(
                        sensorUpgrades.MAX_BUTTON.value,
                    );
                }
            } else {
                reticle.visible = false;
            }
        }
    }

    if (asteroidSpawned && asteroidGltf) {
        // Rotate asteroid if spawned
        asteroidGltf.rotation.x +=
            sensorUpgrades.ASTEROID_ROTATION_SPEED.value;

        fillRandomButtons(sensorUpgrades.MAX_BUTTON.value);
    }

    buttons.forEach((b) => {
        if (!b.mesh) return;

        // Single-click will pulse in size
        if (b.type === "single") {
            const s = 1 + 0.1 * Math.sin(timestamp * 0.005);
            b.mesh.scale.setScalar(s);
        }

        // Multi-click will spin
        if (b.type === "multi") {
            b.mesh.rotation.y += 0.03;
        }
    });

    renderer.render(scene, camera);
}

function animate() {
    renderer.setAnimationLoop(render);
}

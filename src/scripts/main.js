import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
} from "./components.js";
import { addResources, log, DEBUG } from "./util.js";
import "./qr.js";

import "../styles/index.css";
import "../styles/overlay.css";

let container;
let camera, scene, renderer;
let controller;

const MAX_BUTTONS = 10;
let multiClickButtonsRate = 0.5;
let buttons = [];
let triggeredButtons = [];

let buttonMeshes = [];
let buttonsSpawned = false;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;
let planeFound = false;

let asteroidGltf;
let asteroidSpawned = false;
let asteroidRotationSpeed = 0.004;

// check for webxr session support
if ("xr" in navigator) {
    navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        if (supported) {
            //hide "ar-not-supported"
            document.getElementById("ar-not-supported").style.display = "none";
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
function sessionStart() {
    planeFound = false;
    //show #tracking-prompt
    document.getElementById("tracking-prompt").style.display = "block";
}

function addEllipsoidDebug() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff, // cyan
        wireframe: true,
        transparent: true,
        opacity: 0.35,
    });

    const ellipsoid = new THREE.Mesh(geometry, material);

    // Match your ellipsoid radii
    ellipsoid.scale.set(1.5, 1.15, 1.35);

    asteroidGltf.add(ellipsoid);

    log("Ellipsoid debug added");
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

        // DEBUG: hard-coded pink button attached to asteroid
        // const buttonGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        // const buttonMaterial = new THREE.MeshBasicMaterial({
        // 	color: 0xff00ff, // hot pink
        // });

        // const debugButton = new THREE.Mesh(buttonGeometry, buttonMaterial);
        // const surfaceRadius = 1.2;

        // // Any direction you want
        // const dir = new THREE.Vector3(0.6, 0.3, 0.7).normalize();

        // // Place on ellipsoid surface
        // debugButton.position.set(0, 0, 1.5);

        // // Place on surface
        // debugButton.position.copy(dir.multiplyScalar(surfaceRadius));

        // debugButton.lookAt(debugButton.position.clone().multiplyScalar(2));
        // asteroidGltf.add(debugButton);

        asteroidSpawned = true;
        log("Asteroid Added");

        if (DEBUG) {
            const boxHelper = new THREE.BoxHelper(asteroidGltf, 0xff0000); // red
            scene.add(boxHelper);
        }
    }

    function replaceButton() {
        log("replaceButton activated!");
        function onIntersection() {
            function getButtonIndex(buttonArr, targetButtonMesh) {
                return buttonArr
                    .map((button) => button.mesh)
                    .indexOf(targetButtonMesh);
            }

            let timeout = 0;
            let includeTimeout = true;

            // Add Resource
            addResources(1);
            log("+1 Resource");

            // Get hit button mesh
            const hitButtonMesh = intersects[0].object;
            // Remove the hit button
            const hitButton = buttons[getButtonIndex(buttons, hitButtonMesh)];

            if (hitButton instanceof MultiClickAsteroidButton) {
                if (triggeredButtons.every((button) => button !== hitButton))
                    triggeredButtons.push(hitButton);
                else {
                    includeTimeout = false;
                }
                timeout = 3000;
                log("MultiClick Detected");
            }

            log(includeTimeout);

            if (includeTimeout) {
                setTimeout(() => {
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

        if (DEBUG) {
            const arrow = new THREE.ArrowHelper(
                raycaster.ray.direction,
                raycaster.ray.origin,
                1,
                0x00ff00,
            );

            scene.add(arrow);
        }

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
    const button = getRandomAsteroidButton(multiClickButtonsRate);
    const buttonMesh = button.mesh;

    // Change size button
    buttonMesh.scale.setScalar(1.2);

    // LOCAL ellipsoid radii
    const radiusX = 1.5;
    const radiusY = 1.15;
    const radiusZ = 1.35;

    // Random direction on unit sphere
    const dir = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
    ).normalize();

    // Project direction onto ellipsoid surface
    const localPosition = new THREE.Vector3(
        dir.x * radiusX,
        dir.y * radiusY,
        dir.z * radiusZ,
    );

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

// MAIN FUNCTIONS
function init() {
    container = document.createElement("div");
    document.body.appendChild(container);

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

    // spawnRandomButton();
    container.appendChild(renderer.domElement);
    document.body.appendChild(getARButton(renderer));
    window.addEventListener("resize", onWindowResize);
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
                    //hide #tracking-prompt
                    document.getElementById("tracking-prompt").style.display =
                        "none";
                    document.getElementById("instructions").style.display =
                        "flex";
                }
                // Spawn initial buttons after asteroid is spawned
                if (asteroidSpawned && !buttonsSpawned) {
                    for (let i = 0; i < MAX_BUTTONS; i++) {
                        if (spawnRandomButton()) buttonsSpawned = true;
                    }
                }
                const hit = hitTestResults[0];
                if (!asteroidSpawned) {
                    reticle.visible = true;
                    reticle.matrix.fromArray(
                        hit.getPose(referenceSpace).transform.matrix,
                    );
                }
            } else {
                reticle.visible = false;
            }
        }
    }

    // Rotate asteroid if spawned
    if (asteroidSpawned && asteroidGltf) {
        asteroidGltf.rotation.x += asteroidRotationSpeed;
    }

    renderer.render(scene, camera);
}

function animate() {
    renderer.setAnimationLoop(render);
}

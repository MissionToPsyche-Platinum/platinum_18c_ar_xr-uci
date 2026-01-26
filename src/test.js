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
    getAsteroidButton,
} from "./components.js";
import { log } from "./util.js";
import "./qr.js";
import "./style.css";

let container;
let camera, scene, renderer;
let controller;

const MAX_BUTTONS = 10;
let buttonMeshes = [];
let buttonsSpawned = false;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;
let planeFound = false;

let asteroidGltf;
let asteroidSpawned = false;

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
        const boxHelper = new THREE.BoxHelper(asteroidGltf, 0xff0000); // red
        scene.add(boxHelper);
        scene.add(asteroidGltf);
        asteroidSpawned = true;
        log("Asteroid Added");
    }

    function replaceButton() {
        log("replaceButton activated!");
        function onIntersection() {
            const hitButton = intersects[0].object;
            // // Remove the hit button
            scene.remove(hitButton);
            const index = buttonMeshes.indexOf(hitButton);
            if (index > -1) buttonMeshes.splice(index, 1);
            log(`Button removed! Spawning new one.`);
            // // Spawn a new button at random position
            spawnRandomButton();
        }

        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(controller.matrixWorld);

        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        const arrow = new THREE.ArrowHelper(
            raycaster.ray.direction,
            raycaster.ray.origin,
            1,
            0x00ff00,
        );

        scene.add(arrow);

        const intersects = raycaster.intersectObjects(buttonMeshes);
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
    const button = getAsteroidButton();

    // Update world matrix to reflect any scale changes
    asteroidGltf.updateMatrixWorld(true);

    // Get asteroid's world position
    const asteroidWorldPos = new THREE.Vector3();
    asteroidGltf.getWorldPosition(asteroidWorldPos);

    // Ellipsoid scale factors
    const radiusX = 0.35;
    const radiusY = 0.275;
    const radiusZ = 0.35;

    // Generate random point on ellipsoid surface
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.acos(Math.random() * 2 - 1);

    // Parametric ellipsoid surface
    const randomPosition = new THREE.Vector3(
        radiusX * Math.sin(theta) * Math.cos(phi),
        radiusY * Math.sin(theta) * Math.sin(phi),
        radiusZ * Math.cos(theta),
    );

    // Add asteroid's world position
    randomPosition.add(asteroidWorldPos);

    button.position.copy(randomPosition);

    // Orient button to face outward from asteroid center
    const outwardDirection = randomPosition
        .clone()
        .sub(asteroidWorldPos)
        .normalize();
    button.lookAt(randomPosition.clone().add(outwardDirection));

    scene.add(button);
    buttonMeshes.push(button);
    log("Button spawned on ellipsoid surface.");
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

    renderer.render(scene, camera);
}

function animate() {
    renderer.setAnimationLoop(render);
}

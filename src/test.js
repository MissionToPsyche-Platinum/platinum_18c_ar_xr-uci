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

const MAX_BUTTONS = 5;
let buttonMeshes = [];
let buttonsSpawned = false;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;
let planeFound = false;

let asteroidGltf;

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

// CALLBACKS
function sessionStart() {
    planeFound = false;
    //show #tracking-prompt
    document.getElementById("tracking-prompt").style.display = "block";
}

function onSelect() {
    log(`spawnTracker: ${spawnTracker}\nMAX_SPAWN: ${MAX_SPAWN}`);

    function addAsteroid() {
        const asteroidMesh = asteroidGltf;

        reticle.matrix.decompose(
            asteroidMesh.position,
            asteroidMesh.quaternion,
            asteroidMesh.scale,
        );

        const scale = 0.25;
        asteroidMesh.scale.set(scale, scale, scale);
        asteroidMesh.position.y += 0.5;
        scene.add(asteroidMesh);
    }

    function replaceButton() {
        function onIntersection() {
            const hitButton = intersects[0].object;
            // Remove the hit button
            scene.remove(hitButton);
            const index = buttonMeshes.indexOf(hitButton);
            if (index > -1) {
                buttonMeshes.splice(index, 1);
            }
            log(`Button removed! Spawning new one.`);
            // Spawn a new button at random position
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

        const intersects = raycaster.intersectObject(buttonMesh);
        log(`Ray Casting!\nLength: ${intersects.length}`);
        if (intersects.length > 0) onIntersection();
    }

    if (reticle.visible && asteroidGltf) addAsteroid();
    else replaceButton();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function spawnRandomButton() {
    const button = getAsteroidButton();
    const position = new THREE.Vector3();
    reticle.matrix.decompose(
        position,
        new THREE.Quaternion(),
        new THREE.Vector3(),
    );
    position.x += (Math.random() - 0.5) * 2; // Random x offset -1 to 1
    position.z += (Math.random() - 0.5) * 2; // Random z offset -1 to 1
    button.position.copy(position);
    button.rotateX(Math.PI / 2); // Make it horizontal
    scene.add(button);
    buttonMeshes.push(button);
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

    spawnRandomButton();
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
                    // Spawn initial buttons
                    if (!buttonsSpawned) {
                        for (let i = 0; i < MAX_BUTTONS; i++) {
                            spawnRandomButton();
                        }
                        buttonsSpawned = true;
                    }
                }
                const hit = hitTestResults[0];
                if (spawnTracker < MAX_SPAWN) {
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

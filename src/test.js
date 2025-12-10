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
} from "./components.js";
import { log } from "./util.js";
import "./qr.js";
import "./style.css";

const MAX_SPAWN = 1;
let spawnTracker = 0;

let container;
let camera, scene, renderer;
let controller;

let reticle;

let hitTestSource = null;
let hitTestSourceRequested = false;
let planeFound = false;

let asteroidGltf;
let buttonMesh;

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

    if (spawnTracker < MAX_SPAWN && reticle.visible && asteroidGltf) {
        spawnTracker++;
        const mesh = asteroidGltf;

        reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);

        const scale = 0.25;
        mesh.scale.set(scale, scale, scale);
        mesh.position.y += 0.5;
        scene.add(mesh);
    } else {
        const tempMatrix = new THREE.Matrix4();
        tempMatrix.identity().extractRotation(controller.matrixWorld);

        const raycaster = new THREE.Raycaster();
        raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
        raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

        const arrow = new THREE.ArrowHelper(
            raycaster.ray.direction,
            raycaster.ray.origin,
            1,
            0x00ff00
        );

        scene.add(arrow);

        const intersects = raycaster.intersectObject(buttonMesh);
        log(`Ray Casting!\nLength: ${intersects.length}`);
        if (intersects.length > 0) {
            log(`TRIGGERED!`);
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
        function getAsteroidButton() {
            const buttonMesh = new THREE.Mesh(
                new THREE.PlaneGeometry(0.2, 0.2),
                new THREE.MeshBasicMaterial({
                    color: 0xff0000,
                    side: THREE.DoubleSide,
                })
            );
            buttonMesh.position.set(
                0,
                box.getSize(new THREE.Vector3()).y / 2,
                0
            );
            buttonMesh.rotateX(Math.PI / 2);
            return buttonMesh;
        }

        // Center asteroid
        const tempGltf = gltf.scene;
        const box = new THREE.Box3().setFromObject(tempGltf);
        const center = box.getCenter(new THREE.Vector3());
        const modelWrapper = new THREE.Object3D();
        tempGltf.position.sub(center);
        modelWrapper.add(tempGltf);

        // Create button on asteroid
        buttonMesh = getAsteroidButton();
        if (buttonMesh) modelWrapper.add(buttonMesh);

        // Assign result
        asteroidGltf = modelWrapper;
    });

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
                const hit = hitTestResults[0];
                if (spawnTracker < MAX_SPAWN) {
                    reticle.visible = true;
                    reticle.matrix.fromArray(
                        hit.getPose(referenceSpace).transform.matrix
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

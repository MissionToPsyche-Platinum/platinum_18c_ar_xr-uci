import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import "./qr.js";

// import "./style.css";
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

function sessionStart() {
    planeFound = false;
    //show #tracking-prompt
    document.getElementById("tracking-prompt").style.display = "block";
}

function init() {
    container = document.createElement("div");
    document.body.appendChild(container);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20
    );

    const directionalTop = new THREE.DirectionalLight(0xffffff, 1);
    const directionalBottom = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalTop.position.set(2, 2, 2);
    directionalBottom.position.set(-2, -2, -2);
    scene.add(directionalTop);
    scene.add(directionalBottom);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    renderer.xr.addEventListener("sessionstart", sessionStart);

    document.body.appendChild(
        ARButton.createButton(renderer, {
            requiredFeatures: ["local", "hit-test", "dom-overlay"],
            domOverlay: { root: document.querySelector("#overlay") },
        })
    );

    function onSelect() {
        document.getElementById(
            "log"
        ).innerText = `spawnTracker: ${spawnTracker}\nMAX_SPAWN: ${MAX_SPAWN}`;

        if (spawnTracker < MAX_SPAWN && reticle.visible && asteroidGltf) {
            spawnTracker++;
            const mesh = asteroidGltf;

            reticle.matrix.decompose(
                mesh.position,
                mesh.quaternion,
                mesh.scale
            );
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
            document.getElementById(
                "log"
            ).innerText = `Ray Casting!\nIntersects: ${intersects.map((i) =>
                i.point.toArray()
            )}\nLength: ${intersects.length}`;
            if (intersects.length > 0) {
                console.log("Asteroid button pressed!");
                document.getElementById("log").innerText = `TRIGGERED!`;
            }
        }
    }

    controller = renderer.xr.getController(0);
    controller.addEventListener("select", onSelect);
    scene.add(controller);

    reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial()
    );
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    //load psyche.glb
    const loader = new GLTFLoader();

    loader.load("psyche.glb", (gltf) => {
        const tempGltf = gltf.scene;
        const box = new THREE.Box3().setFromObject(tempGltf);
        const center = box.getCenter(new THREE.Vector3());
        const modelWrapper = new THREE.Object3D();
        tempGltf.position.sub(center);
        modelWrapper.add(tempGltf);

        // after creating the asteroid mesh
        buttonMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 0.2),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                side: THREE.DoubleSide,
            })
        );
        buttonMesh.position.set(0, box.getSize(new THREE.Vector3()).y / 2, 0); // above asteroid
        buttonMesh.rotateX(Math.PI / 2);
        modelWrapper.add(buttonMesh);

        asteroidGltf = modelWrapper;
        // scene.add(modelWrapper);
    });

    window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    renderer.setAnimationLoop(render);
}

function render(timestamp, frame) {
    if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (hitTestSourceRequested === false) {
            session
                .requestReferenceSpace("viewer")
                .then(function (referenceSpace) {
                    session
                        .requestHitTestSource({ space: referenceSpace })
                        .then(function (source) {
                            hitTestSource = source;
                        });
                });

            session.addEventListener("end", function () {
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

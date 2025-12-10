import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let psycheGltf;
let renderer;

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

function init() {
    console.log("Initiating...")

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        20
    );
    // Move Camera away so it won't colide with model
    camera.position.z = 5;

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    // LIGHTS
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(2, 2, 2);
    scene.add(directional);

    // LOADER
    // Loads Psyche Asteroid
    const loader = new GLTFLoader();
    loader.load(
        "psyche.glb",
        (gltf) => {
            const tempGltf = gltf.scene;
            const box = new THREE.Box3().setFromObject(tempGltf);
            const center = box.getCenter(new THREE.Vector3());
            const modelWrapper = new THREE.Object3D();
            tempGltf.position.sub(center);
            modelWrapper.add(tempGltf);
            psycheGltf = modelWrapper;
            scene.add(modelWrapper);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
            console.error("An error happened", error);
        }
    );
}

function render(timestamp, frame) {
    // if (psycheGltf) {
    //     psycheGltf.rotation.x += 0.01;
    //     psycheGltf.rotation.y += 0.01;
    //     psycheGltf.rotation.z += 0.01;
    // }
    // renderer.render(scene, camera);

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

                reticle.visible = true;
                reticle.matrix.fromArray(
                    hit.getPose(referenceSpace).transform.matrix
                );
            } else {
                reticle.visible = false;
            }
        }
    }
}

function animate() {
    renderer.setAnimationLoop(render);
}

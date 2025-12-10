import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import "./qr.js";

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
let arizonaGltf;
let psycheReady = false;
let arizonaReady = false;
let spawnWrapper = null;
let buttonMesh;

// check for WebXR support
if ("xr" in navigator) {
	navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
		if (supported) {
			document.getElementById("ar-not-supported").style.display = "none";
			init();
			animate();
		}
	});
}

function sessionStart() {
	planeFound = false;
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

	// Lights
	const directionalTop = new THREE.DirectionalLight(0xffffff, 1);
	const directionalBottom = new THREE.DirectionalLight(0xffffff, 0.5);
	directionalTop.position.set(2, 2, 2);
	directionalBottom.position.set(-2, -2, -2);
	scene.add(directionalTop, directionalBottom);

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

	// Controller
	controller = renderer.xr.getController(0);
	controller.addEventListener("select", onSelect);
	scene.add(controller);

	// Reticle
	reticle = new THREE.Mesh(
		new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
		new THREE.MeshBasicMaterial({ color: 0xffffff })
	);
	reticle.matrixAutoUpdate = false;
	reticle.visible = false;
	scene.add(reticle);

	// Load models
	loadPsyche();
	loadArizona();

	window.addEventListener("resize", onWindowResize);
}

// ---- LOAD PSYCHE ----
function loadPsyche() {
	const loader = new GLTFLoader();
	loader.load("psyche.glb", (gltf) => {
		const tempGltf = gltf.scene;
		const box = new THREE.Box3().setFromObject(tempGltf);
		const center = box.getCenter(new THREE.Vector3());
		const wrapper = new THREE.Object3D();
		tempGltf.position.sub(center);
		wrapper.add(tempGltf);

		// Button above Psyche
		buttonMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(0.2, 0.2),
			new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
		);
		buttonMesh.position.set(0, box.getSize(new THREE.Vector3()).y / 2, 0);
		buttonMesh.rotateX(Math.PI / 2);
		wrapper.add(buttonMesh);

		asteroidGltf = wrapper;
		psycheReady = true;
		console.log("Psyche loaded!");
	});
}

function loadArizona() {
	// ---- LOAD ARIZONA FROM GEOJSON ----
	fetch("/arizona.geojson")
		.then((res) => res.json())
		.then((geojson) => {
			console.log("Loaded Arizona GeoJSON:", geojson);

			if (!geojson.geometry || geojson.geometry.type !== "Polygon") {
				console.error("GeoJSON is not a polygon!");
				return;
			}

			arizonaGltf = new THREE.Group();

			// geojson.geometry.coordinates is an array of linear rings
			geojson.geometry.coordinates.forEach((linearRing) => {
				const shape = new THREE.Shape();

				linearRing.forEach(([lon, lat], idx) => {
					const x = lon - -114; // adjust origin
					const z = lat - 34; // adjust origin
					if (idx === 0) shape.moveTo(x, z);
					else shape.lineTo(x, z);
				});

				const geometry = new THREE.ExtrudeGeometry(shape, {
					depth: 0.1,
					bevelEnabled: false,
				});

				const material = new THREE.MeshBasicMaterial({
					color: 0x00ff00,
					side: THREE.DoubleSide,
				});

				const mesh = new THREE.Mesh(geometry, material);
				//mesh.rotateX(-Math.PI / 2);
				arizonaGltf.add(mesh);
			});

			arizonaGltf.scale.set(0.005, 0.005, 0.005);
			arizonaReady = true;
			console.log("Arizona mesh ready!");
		})
		.catch((err) => console.error("Failed to load GeoJSON:", err));
}

// ---- SPAWN BOTH ----
function onSelect() {
	console.log("screen tapped!");

	if (!psycheReady || !arizonaReady) {
		console.log("Models not yet loaded");
		return;
	}

	if (!reticle.visible) {
		console.log("No valid hit at reticle");
		return;
	}
	if (!spawnWrapper) {
		if (spawnTracker >= MAX_SPAWN || !reticle.visible) return;

		spawnTracker++;
		spawnWrapper = new THREE.Object3D();

		const psycheClone = asteroidGltf.clone();
		psycheClone.name = "psycheClone";
		const arizonaClone = arizonaGltf.clone();
		arizonaClone.name = "arizonaClone";

		console.log("Arizona initial rotation:", arizonaClone.rotation); // debug current rotation
		arizonaClone.rotation.set(0, 0, 0); // reset to upright

		// Compute bounding box to center it
		const box = new THREE.Box3().setFromObject(arizonaClone);
		const center = box.getCenter(new THREE.Vector3());
		arizonaClone.position.sub(center); // move pivot to center

		// scale
		psycheClone.scale.set(0.2, 0.2, 0.2);
		arizonaClone.scale.set(0.3, 0.3, 0.3);

		// position Arizona slightly to the right & above plane
		arizonaClone.position.set(1, 0.001, 0);

		// Now offset it to the right of Psyche -- FOR ROTATIONAL PURPOSES
		//arizonaClone.position.add(new THREE.Vector3(1.5, 0.001, 0)); // adjust X offset

		// Create black outline for Arizona for visual purposes
		const arizonaOutline = arizonaClone.clone();
		arizonaOutline.traverse((child) => {
			if (child.isMesh) {
				child.material = new THREE.MeshBasicMaterial({
					color: 0x000000,
					side: THREE.BackSide,
				});
			}
		});
		arizonaOutline.scale.multiplyScalar(1.02); // slightly bigger
		arizonaOutline.position.copy(arizonaClone.position); // ensure same center
		spawnWrapper.add(arizonaOutline); // add outline

		spawnWrapper.add(psycheClone, arizonaClone);

		// reticle transform
		reticle.matrix.decompose(
			spawnWrapper.position,
			spawnWrapper.quaternion,
			spawnWrapper.scale
		);

		scene.add(spawnWrapper);
		console.log("Spawned both models!");
	}
	// On every tap, reposition wrapper to reticle
	if (spawnWrapper) {
		const position = new THREE.Vector3();
		const quaternion = new THREE.Quaternion();
		const scale = new THREE.Vector3();
		reticle.matrix.decompose(position, quaternion, scale);

		spawnWrapper.position.copy(position);
		spawnWrapper.scale.copy(scale);

		// Force upright
		const euler = new THREE.Euler().setFromQuaternion(quaternion, "YXZ");
		spawnWrapper.rotation.set(0, euler.y, 0);

		console.log("Moved models to new location!");
	}
	console.log("Moved models to new location!");
}

// ---- UTILS ----
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	renderer.setAnimationLoop(render);
}

function render(timestamp, frame) {
	if (!frame) return;

	const referenceSpace = renderer.xr.getReferenceSpace();
	const session = renderer.xr.getSession();

	if (!hitTestSourceRequested) {
		session.requestReferenceSpace("viewer").then((refSpace) => {
			session.requestHitTestSource({ space: refSpace }).then((source) => {
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
				document.getElementById("tracking-prompt").style.display = "none";
				document.getElementById("instructions").style.display = "flex";
			}
			const hit = hitTestResults[0];
			reticle.visible = true;
			reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix);
		} else reticle.visible = false;
	}

	// rotate all spawned Arizona clones
	scene.traverse((child) => {
		// Rotation for Psyche
		if (child.name === "psycheClone") {
			child.rotation.x += 0.01;
			child.rotation.y += 0.01;
		}
		// Rotation for Arizona
		// if (child.name === "arizonaClone") {
		// 	child.rotation.z += 0.01;
		// }
	});

	renderer.render(scene, camera);
}

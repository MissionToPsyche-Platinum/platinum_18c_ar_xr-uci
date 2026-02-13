import $ from "jquery";
import * as THREE from "three";
import params from "../data/params.json"

let counter = 0;

export function log(text) {
    if (params.DEBUG) {
        const log = $("#log-display");
        log.append(`${counter++}. ${text}<br>`);
        log.scrollTop(log[0].scrollHeight);
    }
}

export function addHelper(parent, child) {
    if (params.DEBUG) {
        parent.add(child);
    }
}

export function getDebugEllipsoidHelper() {
    const ellipsoid = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: true,
            transparent: true,
            opacity: 0.35,
        }),
    );

    // Match your ellipsoid radii
    ellipsoid.scale.set(...params.ASTEROID_RADIUS);
    return ellipsoid;
}

export function getDebugBoxHelper(object) {
    return new THREE.BoxHelper(object, 0xff0000);
}

export function getDebugArrowHelper(raycaster) {
    return new THREE.ArrowHelper(
        raycaster.ray.direction,
        raycaster.ray.origin,
        1,
        0x00ff00,
    );
}

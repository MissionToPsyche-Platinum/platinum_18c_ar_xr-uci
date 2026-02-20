import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import { log } from "./util.js";
import { addResources, getResources } from "./hud.js";
import upgrades from "../data/upgrades.json";

export function getCamera() {
    return new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20,
    );
}

export function getDirectionalTopLight() {
    const directionalTop = new THREE.DirectionalLight(0xffffff, 1);
    directionalTop.position.set(2, 2, 2);
    return directionalTop;
}

export function getDirectionalBottomLight() {
    const directionalBottom = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalBottom.position.set(-2, -2, -2);
    return directionalBottom;
}

export function getRenderer(onSessionStart) {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    renderer.xr.addEventListener("sessionstart", onSessionStart);
    return renderer;
}

export function getARButton(renderer) {
    return ARButton.createButton(renderer, {
        requiredFeatures: ["local", "hit-test", "dom-overlay"],
        domOverlay: { root: document.querySelector("#overlay") },
    });
}

export function getController(renderer, onSelect) {
    const controller = renderer.xr.getController(0);
    controller.addEventListener("select", onSelect);
    return controller;
}

export function getRecticle() {
    const reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial(),
    );
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    return reticle;
}

class AsteroidButton {
    constructor(color) {
        this.ON_SELECT_TIME = 100;
        this.ON_SELECT_COLOR = 0x0000ff;

        this.color = color;
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 20, 20),
            new THREE.MeshBasicMaterial({
                color: color,
                roughness: 0.4,
                metalness: 0.1,
            }),
        );
    }

    changeColor(color) {
        this.mesh.material.color.set(color);
    }

    onSelect() {
        setTimeout(() => {
            this.changeColor(this.ON_SELECT_COLOR);
            setTimeout(() => this.changeColor(this.color), this.ON_SELECT_TIME);
        }, this.ON_SELECT_TIME);
    }
}

export class SingleClickAsteroidButton extends AsteroidButton {
    constructor() {
        super(0xff0000);
    }

    onSelect() {
        log("SingleClick");
        super.onSelect();
    }
}

export class MultiClickAsteroidButton extends AsteroidButton {
    constructor() {
        super(0x00ff00);
    }

    onSelect() {
        log("MultiClick");
        super.onSelect();
    }
}

export function getRandomAsteroidButton(multiClickButtonsRate) {
    if (Math.random() <= multiClickButtonsRate)
        return new MultiClickAsteroidButton();
    return new SingleClickAsteroidButton();
}

class UpgradeFactory {
    constructor(name, cost, incrementBy, resourcesBySecond) {
        this.name = name;
        this.cost = cost;
        this.incrementBy = incrementBy;
        this.resourcesBySecond = resourcesBySecond;
        this.count = 0
        this.interval = null;
    }

    start() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => addResources(this.resourcesBySecond * this.count), 1000);
    }

    getCount() {
        return this.count;
    }

    getTotalCost() {
        return this.cost + this.incrementBy * this.count;
    }

    buy() {
        if (getResources() - this.getTotalCost() >= 0) {
            log("Upgraded!")
            addResources(-this.getTotalCost());
            this.count++;
            this.start();
        } else {
            log("Not enough resources!");
        }
    }
}

export class ManualDrillFactory extends UpgradeFactory {
    constructor() {
        super("1", 20, 1, 1);
    }

    buy() {
        log("Attempting to buy manual drill")
        super.buy();
    }
}

export class CrewManagerFactory extends UpgradeFactory {
    constructor() {
        super("2", 40, 5, 3);
    }
    
    buy() {
        log("Attempting to buy crew manager")
        super.buy();
    }
}

import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

import { log } from "./util.js";
import { addResources, getResources } from "./hud.js";

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
    constructor(geometry, color, scale = 1) {
        this.ON_SELECT_TIME = 100;
        this.ON_SELECT_COLOR = 0x0000ff;

        this.color = color;

        this.mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.6,
                roughness: 0.4,
                metalness: 0.1,
            }),
        );

        this.mesh.scale.setScalar(scale);
    }

    changeColor(color) {
        this.mesh.material.color.set(color);
        this.mesh.material.emissive.set(color);
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
        super(
            new THREE.SphereGeometry(0.15, 16, 16), // shape
            0x9b5de5, // purple
            2,
        );

        this.type = "single";
    }

    onSelect() {
        log("SingleClick");
        super.onSelect();
    }
}

export class MultiClickAsteroidButton extends AsteroidButton {
    constructor() {
        super(
            new THREE.BoxGeometry(0.12, 0.12, 0.12), // shape
            0xf15a24, // orange
            2,
        );

        this.type = "multi";
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

export class ToolUpgrade {
    constructor(config) {
        this.name = config.name;
        this.defaultCost = config.defaultCost;
        this.incrementBy = config.incrementBy;
        this.resourcesPerSecond = config.resourcesPerSecond;
        this.count = 0;
        this.interval = null;

    }

    start() {
        log(`RPS: ${this.resourcesPerSecond}; Count: ${this.count}`)
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(
            () => addResources(this.resourcesPerSecond * this.count),
            1000,
        );
    }

    getCount() {
        return this.count;
    }

    getTotalCost() {
        return this.defaultCost + this.incrementBy * this.count;
    }

    isBuyable() {
        return getResources() - this.getTotalCost() >= 0;
    }

    buy() {
        if (this.isBuyable()) {
            log(`Tool upgraded! Cost: ${this.getTotalCost()}`);
            addResources(-this.getTotalCost());
            this.count++;
            this.start();
        } else {
            log("Not enough resources!");
        }
    }
}

export class SensorUpgrade {
    constructor(config) {
        // Core Identity
        this.name = config.name;

        // Cost Logic
        this.initCost = config.defaultCost;
        this.cost = config.defaultCost;
        this.incrementBy = config.incrementBy;
        this.multiplyBy = Math.max(1, config.multiplyBy);
        this.costCompounding = config.costCompounding;

        // Value Logic
        this.initValue = config.initialValue;
        this.value = config.initialValue;
        this.valueIncrementBy = config.valueIncrementBy;
        this.valueMultiplyBy = Math.max(1, config.valueMultiplyBy);
        this.valueCompounding = config.valueCompounding;

        // Tracking state
        this.level = 0;
    }

    isBuyable() {
        return getResources() - this.cost >= 0;
    }

    getTotalCost() {
        return this.costCompounding
            ? this.cost * this.multiplyBy + this.incrementBy
            : this.initCost * this.multiplyBy + this.incrementBy * this.level;
    }

    getValue() {
        return this.valueCompounding
            ? this.value * this.valueMultiplyBy + this.valueIncrementBy
            : this.initValue * this.valueMultiplyBy +
                  this.valueIncrementBy * this.level;
    }

    buy() {
        log(`Sensor total cost: ${this.cost}`)
        if (!this.isBuyable()) return;
        log("Sensor upgraded!")
        addResources(-this.cost);

        this.value = this.getValue();
        this.cost = this.getTotalCost();
        this.level++;

        log(
            `${this.name} is now level ${this.level}. Next cost: ${this.cost}. Value: ${this.value}`,
        );
    }
}

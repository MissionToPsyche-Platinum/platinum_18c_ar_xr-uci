import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

import { log, notify } from "./util.js";
import { addResources, getResources } from "./hud.js";
import popSoundFile from "../../public/bubble_pop.mp3";
import pickaxeSoundFile from "../../public/pickaxe.mp3";

const popAudio = new Audio(popSoundFile);
popAudio.volume = 0.6;

const pickaxeAudio = new Audio(pickaxeSoundFile);
pickaxeAudio.volume = 0.6;

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
    new THREE.MeshBasicMaterial({color: 0xf15a24}),
  );
  reticle.matrixAutoUpdate = false;
  reticle.visible = false;
  return reticle;
}

class AsteroidButton {
  constructor(geometry, color, scale = 2) {
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
    );

    this.type = "single";
  }

  onSelect() {
    log("SingleClick");
    popAudio.currentTime = 0;
    popAudio.play().catch(() => {});
    super.onSelect();
  }
}

export class MultiClickAsteroidButton extends AsteroidButton {
  constructor() {
    super(
      new THREE.BoxGeometry(0.12, 0.12, 0.12), // shape
      0xf15a24, // orange
    );

    this.type = "multi";
  }

  onSelect() {
    log("MultiClick");
    pickaxeAudio.currentTime = 0;
    pickaxeAudio.play().catch(() => {});
    super.onSelect();
  }
}

export function getRandomAsteroidButton(multiClickButtonsRate) {
  if (Math.random() <= multiClickButtonsRate)
    return new MultiClickAsteroidButton();
  return new SingleClickAsteroidButton();
}

class Upgrade {
  constructor(config) {
    // Core Identity
    this.name = config.name;
    this.image = config.image;
    this.buyable = config.buyable;
    this.description = config.description;

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
    this.locked = true;
  }

  hasEnoughResources() {
    return getResources() - this.cost >= 0;
  }

  isBuyable() {
    return this.buyable;
  }

  unlock() {
    this.locked = false;
  }

  getTotalCost() {
    return this.cost * this.multiplyBy + this.incrementBy * this.level;
  }

  getNextValue() {
    return (
      this.value * this.valueMultiplyBy + this.valueIncrementBy * this.level
    );
  }

  buy() {
    log(`Buying ${this.name} (Locked: ${this.locked})`);
    if (this.locked) {
      notify(`${this.name} is locked!`);
      return;
    }

    log(`${this.name} total cost: ${this.cost}`);
    if (!this.hasEnoughResources()) {
      notify(`Not enough resources!`);
      return;
    }

    log(`${this.name} upgraded!`);
    addResources(-this.cost);
    this.reward();
  }

  reward() {
    this.value = this.getNextValue();
    this.cost = this.getTotalCost();
    this.level++;
  }
}

export class ToolUpgrade extends Upgrade {
  constructor(config) {
    super(config);
  }

  start() {
    log(`RPS: ${this.value}; Count: ${this.level}`);
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(
      () => addResources(this.value * this.level),
      1000,
    );
  }

  pause() {
    if (this.interval) clearInterval(this.interval);
  }

  reward() {
    if (this.locked) {
      log(`Unlocked ${this.name}`);
      this.unlock();
      return;
    }

    super.reward();
    this.start();
  }
}

export class SensorUpgrade extends Upgrade {
  constructor(config) {
    super(config);
  }

  reward() {
    if (this.locked) {
      this.unlock();
      return;
    }

    super.reward();

    log(
      `${this.name} is now level ${this.level}. Next cost: ${this.cost}. Value: ${this.value}`,
    );
  }
}

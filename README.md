# Psyche AR/XR - Public Engagement Experience

An interactive WebXR experience for exploring the Psyche mission through resource collection, milestones, and upgrade mechanics in augmented reality.

Team: Kristen Chung, Neil Chen, Wilson Zheng, Huy Tu, Angie Xetey

## Live Site

Production URL:

https://missiontopsyche-platinum.github.io/platinum_18c_ar_xr-uci/

## Project Overview

This project is a Vite-powered Three.js AR application that:

- Loads and anchors a 3D asteroid model in AR
- Lets users collect resources by interacting with asteroid buttons
- Applies tool/sensor upgrades based on gameplay progression
- Displays HUD progress, milestones, and end-of-session stats

The app is configured for GitHub Pages deployment and outputs built assets into `docs/`.

## Tech Stack

- Vite 7
- Three.js
- jQuery
- Variant Launch / Launchar WebXR SDK

## Prerequisites

1. Node.js 18+ (Node.js 20 LTS recommended)
2. npm
3. A mobile device/browser with AR/WebXR support for full experience testing
4. A valid Variant Launch SDK key

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Variant Launch SDK key

In `index.html`, replace the SDK script tag key with your own key from https://launchar.app.

Important:

- Do not commit personal or temporary SDK keys if they should remain private.
- Keep local testing keys out of shared history when required by your team process.

### 3. Start local dev server

```bash
npm run dev
```

Vite runs on port `5173` with strict port enabled.

### 4. Start public tunnel for mobile device AR testing

```bash
npm run serve-public
```

This runs:

- Vite locally on `http://localhost:5173`
- `cloudflared` tunnel so you can open the app from a phone on another network

## Available Scripts

- `npm run dev`: Run local Vite development server
- `npm run build`: Build production assets to `docs/`
- `npm run preview`: Preview production build locally
- `npm run serve-public`: Run dev server + cloudflared tunnel for remote/mobile testing
- `npm run subdir-build`: Build with alternate base path `/threejs/`

## Deployment (GitHub Pages)

This repository is already configured for GitHub Pages style hosting:

- `base` is set to `/platinum_18c_ar_xr-uci/`
- Build output directory is `docs/`

To deploy updates:

1. Commit your source changes.
2. Run:

```bash
npm run build
```

3. Commit the updated files inside `docs/`.
4. Push to `main`.
5. Confirm GitHub Pages is configured to serve from `main` branch and `docs/` folder.

After GitHub Pages finishes publishing, your update is available at:

https://missiontopsyche-platinum.github.io/platinum_18c_ar_xr-uci/

## Project Structure

```text
.
|- index.html
|- src/
|  |- scripts/
|  |  |- main.js        # AR scene, hit tests, model load, interaction flow
|  |  |- hud.js         # HUD timers, resources, milestones, overlays
|  |  |- components.js  # Three.js/XR component factories and classes
|  |  |- qr.js          # QR fallback/support logic
|  |  |- util.js        # Utility and debug helpers
|  |- data/
|  |  |- params.json
|  |  |- milestones.json
|  |  |- tool_upgrades.json
|  |  |- sensor_upgrades.json
|  |- styles/
|     |- index.css
|     |- hud.css
|- public/              # Static assets copied as-is
|- docs/                # Built output for GitHub Pages
|- vite.config.js
|- eslint.config.js
```

## Content and Balancing

Core gameplay values and progression are data-driven:

- `src/data/params.json`: global gameplay and rendering parameters
- `src/data/milestones.json`: educational/progression milestones
- `src/data/tool_upgrades.json`: tool upgrade definitions
- `src/data/sensor_upgrades.json`: sensor upgrade definitions

Update these files to tune difficulty, pacing, and educational messaging without rewriting core logic.

## Troubleshooting

- AR button does not appear:
    - Confirm device/browser supports `immersive-ar` WebXR sessions.
    - Ensure you are using a secure context (HTTPS or allowed local context).
- App works locally but not on Pages:
    - Rebuild with `npm run build`.
    - Verify `docs/` changes were committed and pushed.
    - Confirm repo Pages settings target `main` + `docs/`.
- Model or assets fail to load:
    - Check paths respect `import.meta.env.BASE_URL` and project base path.
- Public testing link not reachable:
    - Ensure `cloudflared` is running successfully and not blocked by firewall/network restrictions.
- ERR_SSL_PROTOCOL_ERROR on SDK:
    - Disable `Security Shield` in the My Spectrum app (or your ISP’s equivalent). 

## Notes

- The repository is currently configured as a public package (`"private": false`).
- License is MIT (see `package.json`).

## Credits

Created for NASA Psyche public engagement by the Anteater Orbiters team.

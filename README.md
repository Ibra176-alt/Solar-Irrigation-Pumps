# HERVeg.05 Cinematic Investor Experience

A premium, interactive documentary-style proposal for:
**Solar-Powered Irrigation for Women Farmers in Tanzania**.

## Project structure
- `index.html` — full cinematic narrative and section architecture.
- `styles.css` — brand system, responsive visual language, cinematic layouts.
- `script.js` — Lenis + GSAP + ScrollTrigger + Intersection Observer animations.
- `assets/images/` — documentary-style scene imagery (replace placeholders below).

## Run locally
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080`.

## Required image placeholders
Wire your final documentary imagery to these files:
- `scene1-drought.jpg`
- `scene2-manual-watering.jpg`
- `scene4-lush-fields.jpg`
- `scene7-amina-before.jpg`
- `scene7-amina-struggle.jpg`
- `scene7-amina-training.jpg`
- `scene7-amina-harvest.jpg`
- `scene7-amina-family.jpg`
- `scene8-scale.jpg`

## Editing guidance
- Core narrative is in `index.html` sections (hero → crisis → solution → Amina → funding → CTA).
- Visual pacing and atmosphere are mainly controlled in `styles.css` (`.section`, `.panel-image`, `.pause`, `.cta`).
- Motion timing is controlled in `script.js` under the GSAP blocks.

# Systems Lab

A dependency-free, interactive system-design course for GitHub Pages. Three lessons cover server saturation, load balancing and cache stampedes.

## Run locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in a modern browser. Do not open HTML files directly: ES modules require HTTP. No install or build is needed; all assets are local.

## GitHub Pages (manual, optional)

Create your own repository, copy this directory's contents to its root (including `.nojekyll`), commit and push. In Settings → Pages, choose Deploy from a branch, main, / (root). The site works under a project prefix such as `https://USERNAME.github.io/system-design/`. All navigation and module paths are relative. This package does not publish anything or include credentials.

## Learning flow

Each lesson presents an incident, saves an architectural decision, offers an interactive simulator and checks understanding. Correct quiz answers mark lessons complete. Decisions, answers, completion and theme use namespaced localStorage. Simulation controls reset to defaults on reload. Clear browser site data to erase progress. If storage is blocked, lessons still work but progress is not retained.

## Architecture and extension

- `sim/engine.js`: seeded RNG, requests, nodes, metrics and fixed-step simulation.
- `sim/renderer.js`: shared SVG topology and queue history renderer.
- `sim/scenarios.js`: declarative content, controls, topology and lifecycle hooks.
- `assets/app.js`: common lesson interface and playback.
- `assets/nav.js`: shared header, navigation and theme.

To add a lesson, add a scenario object and copy one lesson HTML shell, setting its `data-lesson` and title. Give the scenario the next two-digit number. No engine changes are necessary: `before`, `arrive`, `complete` and `configure` hooks define behavior. Supported controls are numeric sliders and one option selector; additional bespoke UI requires updating the interface.

## Model limits

This is an educational model, not a production capacity calculator. Arrivals are evenly spaced, service times have seeded variation, queues are FIFO and bounded per node, and service times are quantized to 50 ms steps. Worker concurrency abstracts CPU/I/O resources. Nodes retain pending work while failed. Round robin intentionally ignores health; least-load skips failed nodes. Cache TTL is four seconds and origin fetches always succeed once admitted. Coalesced waiters are outside the origin queue and unbounded in this single-key model. Cached responses have zero modeled service latency. Throughput/rejections are cumulative since reset; p95 uses up to the last 5,000 completions and excludes outstanding or rejected requests. History covers approximately 50 simulated seconds. Speed advances simulation time, not networking.

## Checks

With Node 18+ installed, run `npm test` (no dependency installation). Tests cover overload, recovery, routing failure and cache coalescing. The included validation report records the delivery checks.

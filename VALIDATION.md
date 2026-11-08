# Delivery validation — 8 November 2026

- Passed automated simulation assertions: low-load operation, overload rejection, latency increase, bounded queue, recovery after reducing traffic, seeded determinism, failed-node routing, cache coalescing and reset.
- Cache experiment: 88 origin fetches without coalescing versus 4 with coalescing in 20 simulated seconds at default traffic. Aggregate p95 may be dominated by cache hits; it is not a reliable standalone stampede metric.
- Served the complete repository over local HTTP at a project prefix (`/system-design/`). All three lesson pages and shared module navigation loaded.
- Browser-tested saturation traffic, play/pause, speed, decisions and quiz; decision, correct answer and completion survived reload. Course overview showed the completion badge.
- Browser-tested load-balancer failure and routing controls, cache expiry/coalescing controls and theme persistence across pages.
- Visually inspected light desktop saturation and dark mobile cache layouts. At 390px width, document width was also 390px (no horizontal overflow).
- Checked all static HTML asset/navigation references and JavaScript relative imports against repository files.
- ZIP integrity checked after packaging. No deployment, GitHub repository creation or publication performed.

Simulation simplifications and local startup instructions are in README.md. Browser coverage is representative, not exhaustive across every browser or assistive technology.

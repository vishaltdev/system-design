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

## Master guide expansion — 8 November 2026

- Added and checked 28 component guides, 18 worked designs and eight roadmap stages. Every worked design includes requirements, API, data, flow, scale, failure and trade-off reasoning. All component and roadmap references resolve.
- Browser-tested architecture highlights, component details, studied marks, text search, group filtering and empty results.
- Browser-tested practice selection, distributed cache blueprint, notes, self-review checkbox and roadmap study checks. Notes, selected practice design and progress survived reload.
- Capacity calculator: 86,400 users × 100 daily requests yielded 100 average QPS, 500 peak QPS at multiplier 5 and 10 average writes/s at 10%. Rejected a write share of 101%.
- Original simulation regression suite passed. Browser navigation from the new homepage to the labs and saturation lesson worked.
- Inspected dark desktop and mobile guide layouts and light-theme architecture; 390px viewport had 390px document width. No external runtime dependencies.
- Primary references are linked in the guide. Worked designs are educational starting points rather than production specifications.

export const components=[
  {
    "id": "client",
    "name": "Clients & protocols",
    "group": "Access",
    "purpose": "Browser or mobile client using HTTP, streaming or persistent connections.",
    "when": "Choose REST for resource APIs; use WebSockets for bidirectional sessions and SSE for server-to-client events.",
    "tradeoff": "Persistent connections require reconnect, ordering and backpressure policies.",
    "check": "Define deadlines, pagination, versioning and a reconnect cursor.",
    "question": "How does a reconnecting client resume without losing or repeating updates?"
  },
  {
    "id": "dns",
    "name": "DNS & traffic steering",
    "group": "Edge",
    "purpose": "Resolves service names and can steer users toward a region.",
    "when": "Use regional routing when latency, residency or disaster recovery justify it.",
    "tradeoff": "DNS answers are cached; failover is not instantaneous.",
    "check": "Plan TTLs, regional health and client connection behavior together.",
    "question": "What happens to existing connections when DNS changes?"
  },
  {
    "id": "cdn",
    "name": "CDN & edge cache",
    "group": "Edge",
    "purpose": "Serves cacheable assets close to users and reduces origin load.",
    "when": "Use for images, video segments, public content and static assets.",
    "tradeoff": "Invalidation and private content need careful cache keys and access control.",
    "check": "Use versioned URLs and explicit freshness rules; avoid caching private responses under shared keys.",
    "question": "Can the response be shared safely across users?"
  },
  {
    "id": "gateway",
    "name": "API gateway & load balancer",
    "group": "Ingress",
    "purpose": "Routes requests to healthy service instances and terminates common edge concerns.",
    "when": "Start with a load balancer; add a gateway for API policy and routing requirements.",
    "tradeoff": "Extra hops and centralized policy can add latency or become bottlenecks.",
    "check": "Separate readiness from liveness, bound request sizes and preserve deadlines.",
    "question": "How will unhealthy or draining nodes stop receiving new work?"
  },
  {
    "id": "auth",
    "name": "Identity & authorization",
    "group": "Ingress",
    "purpose": "Authenticates callers and checks whether they can access each resource.",
    "when": "Use scoped credentials, short-lived sessions and resource-level permission checks.",
    "tradeoff": "Revocation, token caching and cross-service trust introduce stale authorization risks.",
    "check": "Check ownership at the service; never trust a client-supplied user ID alone.",
    "question": "How are permissions enforced after content becomes private?"
  },
  {
    "id": "rate",
    "name": "Rate limits & admission",
    "group": "Ingress",
    "purpose": "Bounds admitted work per user, tenant or resource to protect capacity.",
    "when": "Token buckets allow controlled bursts; concurrency limits protect expensive work.",
    "tradeoff": "Global limits require coordination; local limits can overshoot a fleet-wide target.",
    "check": "Specify key, window, burst allowance, response and retry policy.",
    "question": "Does the limit protect fairness, abuse, cost or service capacity?"
  },
  {
    "id": "service",
    "name": "Stateless application services",
    "group": "Compute",
    "purpose": "Runs domain logic while durable state lives outside process memory.",
    "when": "Use independently scalable services only when boundaries or operational needs justify them.",
    "tradeoff": "Network calls, deployments and ownership become more complex as services multiply.",
    "check": "Start from domain boundaries and make every remote call bounded.",
    "question": "Which service owns the invariant and the source of truth?"
  },
  {
    "id": "realtime",
    "name": "Realtime sessions & presence",
    "group": "Compute",
    "purpose": "Manages online connections, subscriptions and transient presence.",
    "when": "Use a connection fleet with shared routing metadata for chat, collaboration and live updates.",
    "tradeoff": "Presence is approximate; a network break is not an immediate offline signal.",
    "check": "Use heartbeats, session expiry, sequence numbers and resumption tokens.",
    "question": "Where is a user connected, and what happens after reconnect?"
  },
  {
    "id": "cache",
    "name": "Application cache",
    "group": "Data",
    "purpose": "Stores derived or frequently read values to reduce expensive reads.",
    "when": "Cache-aside is a useful baseline for read-heavy data with explicit staleness tolerance.",
    "tradeoff": "Eviction, invalidation, hot keys and stampedes can overload the source of truth.",
    "check": "Define key, TTL, invalidation, miss behavior and stale-data policy.",
    "question": "What happens when the cache is empty or unavailable?"
  },
  {
    "id": "sql",
    "name": "Relational database & transactions",
    "group": "Data",
    "purpose": "Stores authoritative records and enforces transactional invariants.",
    "when": "Use constraints and transactions for orders, inventory, ownership and ledger entries.",
    "tradeoff": "Isolation, lock contention and indexes affect correctness and throughput.",
    "check": "Write the invariant first; use conditional updates or appropriate isolation with retries.",
    "question": "Can two concurrent requests both pass the same availability check?"
  },
  {
    "id": "nosql",
    "name": "Key-value & wide-column stores",
    "group": "Data",
    "purpose": "Stores records optimized for known key and range access patterns.",
    "when": "Use when predictable access paths and partitioned scale dominate the requirements.",
    "tradeoff": "Joins and multi-record invariants may move into application workflows.",
    "check": "Design partition and sort keys from queries; specify consistency per operation.",
    "question": "Will one customer or one key receive a disproportionate share of traffic?"
  },
  {
    "id": "replicas",
    "name": "Replication & read routing",
    "group": "Data",
    "purpose": "Copies data for availability and, where supported, read capacity.",
    "when": "Use replicas for reads that tolerate lag; route critical reads to an authoritative path.",
    "tradeoff": "Asynchronous replication can return stale data and lose recent writes during failover.",
    "check": "Define replication mode, promotion rules and read-your-writes behavior.",
    "question": "Can a user read an older version immediately after a successful write?"
  },
  {
    "id": "shards",
    "name": "Partitioning & sharding",
    "group": "Data",
    "purpose": "Splits data or traffic across independently managed partitions.",
    "when": "Partition once workload, size or isolation requires more than one storage owner.",
    "tradeoff": "Hot partitions, cross-shard queries and resharding add operational cost.",
    "check": "Choose a key with enough spread; plan movement, routing and cross-partition operations.",
    "question": "How does your design rebalance when one shard becomes hot?"
  },
  {
    "id": "blob",
    "name": "Object storage & media",
    "group": "Data",
    "purpose": "Stores large immutable objects separately from searchable metadata.",
    "when": "Use direct signed uploads and retain object references in metadata records.",
    "tradeoff": "Object writes and metadata commits are not one transaction by default.",
    "check": "Validate uploads, track lifecycle states and clean orphaned objects.",
    "question": "What happens if upload succeeds but metadata commit fails?"
  },
  {
    "id": "search",
    "name": "Search index & retrieval",
    "group": "Data",
    "purpose": "Builds a derived index for full-text, filtering or relevance-based lookup.",
    "when": "Use an asynchronous indexing pipeline when database queries no longer fit search needs.",
    "tradeoff": "The index may lag, omit updates or expose deleted content if permissions are ignored.",
    "check": "Keep an authoritative source, replayable indexing and query-time access checks.",
    "question": "How will you rebuild the index and honor a deletion?"
  },
  {
    "id": "queue",
    "name": "Task queues & workers",
    "group": "Async",
    "purpose": "Buffers work for independent processing with acknowledgement and redelivery.",
    "when": "Use for emails, media processing and background jobs that need not finish in the request.",
    "tradeoff": "Retries can duplicate side effects; unbounded backlogs turn delays into outages.",
    "check": "Bound retries, track queue age and isolate poison jobs in a dead-letter path.",
    "question": "What if the worker commits a side effect and crashes before acknowledging?"
  },
  {
    "id": "stream",
    "name": "Event log & stream processing",
    "group": "Async",
    "purpose": "Retains ordered partitions of events for replay and multiple consumers.",
    "when": "Use when independent consumers need a durable history or ordered per-key processing.",
    "tradeoff": "Ordering is usually scoped to a partition; end-to-end effects need more than broker guarantees.",
    "check": "Choose event keys, retention, schema evolution and offset/commit strategy.",
    "question": "How will a consumer replay events without duplicating external effects?"
  },
  {
    "id": "outbox",
    "name": "Outbox & change capture",
    "group": "Async",
    "purpose": "Transfers committed business changes into an asynchronous pipeline.",
    "when": "Use a transactional outbox when a database update and event publication must stay aligned.",
    "tradeoff": "Delivery may duplicate; change capture requires lag monitoring and retention planning.",
    "check": "Commit state plus outbox atomically, relay later and deduplicate downstream.",
    "question": "How do you avoid saving an order without publishing its event?"
  },
  {
    "id": "idempotency",
    "name": "Idempotency & deduplication",
    "group": "Correctness",
    "purpose": "Recognizes repeated operations and prevents duplicate business effects.",
    "when": "Use stable operation keys on retryable writes, payments and message handlers.",
    "tradeoff": "Keys need a scope, retention, payload binding and atomic state transitions.",
    "check": "Persist the key and business effect consistently; replay the stored result.",
    "question": "What if the same key arrives twice concurrently with different payloads?"
  },
  {
    "id": "coordination",
    "name": "Consensus, leases & locks",
    "group": "Correctness",
    "purpose": "Coordinates leadership or exclusive ownership under concurrent failures.",
    "when": "Use a consensus-backed authority when one owner or ordered configuration is required.",
    "tradeoff": "Leases expire; a paused old owner can resume after losing ownership.",
    "check": "Use fencing tokens checked by the protected resource; state the failure assumptions.",
    "question": "How is an expired leader prevented from writing after a new leader starts?"
  },
  {
    "id": "saga",
    "name": "Sagas & distributed workflows",
    "group": "Correctness",
    "purpose": "Coordinates a multi-service business process through durable steps and compensations.",
    "when": "Use when one database transaction cannot span the participating services.",
    "tradeoff": "Compensation is a business action, not a guaranteed rollback of the world.",
    "check": "Persist step state, make handlers idempotent and define reconciliation paths.",
    "question": "What happens when cancellation succeeds but the refund provider is unavailable?"
  },
  {
    "id": "resilience",
    "name": "Timeouts, retries & isolation",
    "group": "Operations",
    "purpose": "Bounds waiting and prevents dependency failures from consuming all capacity.",
    "when": "Use deadlines, bounded retries with backoff/jitter and per-dependency concurrency budgets.",
    "tradeoff": "Retries increase load and may duplicate effects unless the operation is safe.",
    "check": "Propagate budgets, retry at a deliberate layer and shed work before saturation.",
    "question": "Can three retrying layers turn one request into many downstream attempts?"
  },
  {
    "id": "observability",
    "name": "SLOs, metrics & tracing",
    "group": "Operations",
    "purpose": "Connects user-facing reliability targets to measurable service behavior.",
    "when": "Track success and latency SLIs, error budgets, saturation and dependency traces.",
    "tradeoff": "Averages hide tails; high-cardinality labels can make telemetry expensive.",
    "check": "Measure user journeys and define what counts as a good event.",
    "question": "Which metric would reveal the failure before users report it?"
  },
  {
    "id": "regions",
    "name": "Multi-region & disaster recovery",
    "group": "Operations",
    "purpose": "Restores service after regional failure with explicit data-loss and recovery targets.",
    "when": "Choose active-passive or active-active based on RPO, RTO, latency and write conflicts.",
    "tradeoff": "Cross-region coordination adds latency; asynchronous failover may lose acknowledged writes.",
    "check": "Test promotion, fencing, backups and restoration with an explicit conflict policy.",
    "question": "How much data may be lost and how long may recovery take?"
  },
  {
    "id": "security",
    "name": "Security, privacy & lifecycle",
    "group": "Operations",
    "purpose": "Protects data across storage, transit, authorization, retention and deletion.",
    "when": "Apply least privilege, encryption, audit trails and tenant isolation throughout the design.",
    "tradeoff": "More copies and derived views make deletion and permission changes harder.",
    "check": "Track data lineage, key rotation, retention and backup deletion policy.",
    "question": "Where can a deleted record still exist?"
  },
  {
    "id": "deploy",
    "name": "Deployment & configuration",
    "group": "Operations",
    "purpose": "Changes code and configuration while controlling the blast radius.",
    "when": "Use canaries, gradual rollout and backward-compatible schema evolution.",
    "tradeoff": "Mixed versions and rollback can violate assumptions about data and messages.",
    "check": "Use expand-migrate-contract and verify health before widening rollout.",
    "question": "Can an old service version read records written by the new one?"
  },
  {
    "id": "analytics",
    "name": "Analytics & batch pipelines",
    "group": "Async",
    "purpose": "Transforms operational events into aggregates for reporting and offline processing.",
    "when": "Use asynchronous pipelines to protect transactional workloads from heavy analysis.",
    "tradeoff": "Late events, duplicates and schema drift can corrupt aggregates.",
    "check": "Define event time, watermarks, deduplication, backfill and freshness expectations.",
    "question": "How do you correct yesterday\u2019s report when events arrive late?"
  },
  {
    "id": "ids",
    "name": "Identifiers & time",
    "group": "Correctness",
    "purpose": "Provides stable identities and a way to reason about event order.",
    "when": "Choose random IDs, coordinated sequences or time-based IDs from collision and ordering needs.",
    "tradeoff": "Clock skew and monotonicity matter; sortable IDs can reveal timing information.",
    "check": "Separate identity, wall-clock time and logical ordering guarantees.",
    "question": "Must IDs be globally ordered, or only unique?"
  }
];
export const designs=[
  {
    "id": "shortener",
    "name": "URL shortener",
    "pattern": "Read-heavy lookup",
    "components": [
      "dns",
      "cdn",
      "gateway",
      "rate",
      "service",
      "cache",
      "sql",
      "ids",
      "analytics"
    ],
    "requirements": "Create durable short links; redirect quickly; support expiry and optional custom aliases. Clarify whether links are editable and whether click analytics are approximate.",
    "api": "POST /links {url, alias?, expiresAt?}; GET /{code} \u2192 redirect. Treat destination validation and abusive links as part of the product.",
    "data": "Link(code PK, destination, owner_id, expires_at). Unique code constraint resolves collisions. Keep click events outside the redirect transaction.",
    "flow": "Write: validate \u2192 allocate code \u2192 insert. Read: edge/app cache \u2192 authoritative mapping \u2192 redirect; emit click event asynchronously.",
    "scale": "Reads dominate. Cache popular immutable mappings; partition by code only when storage or write load requires it. Avoid permanent browser caching for editable links.",
    "failure": "Cache loss increases database traffic: coalesce misses and admit work. A collision requires a new code or a rejected alias.",
    "tradeoff": "A 301 can be sticky at clients; a temporary redirect preserves edit flexibility. Analytics can lag without blocking redirects."
  },
  {
    "id": "feed",
    "name": "Social news feed",
    "pattern": "Fanout & ranking",
    "components": [
      "gateway",
      "auth",
      "service",
      "cache",
      "nosql",
      "queue",
      "stream",
      "shards",
      "blob",
      "cdn"
    ],
    "requirements": "Publish posts, follow users and read a ranked or chronological feed. Clarify privacy, celebrity accounts and freshness.",
    "api": "POST /posts; POST /follows; GET /feed?cursor=. Authenticate reads and writes; return stable pagination cursors.",
    "data": "Post(post_id, author, content_ref, created_at); Follow(follower, followee); Inbox(user_id, rank_key, post_id).",
    "flow": "Publish \u2192 persist post \u2192 event \u2192 fanout workers \u2192 follower inboxes. Read inbox \u2192 hydrate posts \u2192 filter access \u2192 rank.",
    "scale": "Use fanout-on-write for ordinary accounts and merge celebrity posts on read. Bound inbox size and hydrate in batches.",
    "failure": "Worker redelivery must deduplicate inbox entries. Reconcile missing fanout; suppress deleted or newly private posts at read time.",
    "tradeoff": "Write fanout speeds reads but amplifies storage and work; read fanout handles large audiences but raises query cost."
  },
  {
    "id": "chat",
    "name": "Messaging / chat",
    "pattern": "Realtime delivery",
    "components": [
      "gateway",
      "auth",
      "realtime",
      "service",
      "nosql",
      "shards",
      "queue",
      "idempotency",
      "ids"
    ],
    "requirements": "Send messages to one person or a group, retrieve history and resume after disconnection. Separate accepted, delivered and read states.",
    "api": "POST /conversations/{id}/messages with client_message_id; GET history?cursor=; WebSocket subscribe/resume.",
    "data": "Message(conversation_id, sequence, message_id, sender, body); Membership(conversation_id, user); Receipt(user, conversation, sequence).",
    "flow": "Authorize membership \u2192 durably append \u2192 acknowledge acceptance \u2192 route to connected members. Offline clients fetch from their last cursor.",
    "scale": "Partition by conversation; large rooms need fanout tiers. Separate durable message storage from ephemeral presence.",
    "failure": "Deduplicate client retries; resume with sequence numbers and detect gaps. Presence can expire without implying message loss.",
    "tradeoff": "Per-conversation order is cheaper than global order. End-to-end encryption changes search, moderation and key recovery."
  },
  {
    "id": "video",
    "name": "Video platform",
    "pattern": "Media pipeline",
    "components": [
      "cdn",
      "gateway",
      "auth",
      "service",
      "blob",
      "sql",
      "queue",
      "outbox",
      "idempotency",
      "search"
    ],
    "requirements": "Upload videos, process playable variants and stream adaptively. Clarify public/private media, processing delay and deletion.",
    "api": "POST /uploads \u2192 signed target; POST /videos/{id}/finalize; GET /videos/{id}/manifest.",
    "data": "Video(id, owner, source_key, status); Rendition(video_id, profile, object_key). Store byte payloads in objects, metadata in a database.",
    "flow": "Upload directly \u2192 validate \u2192 persist processing job \u2192 transcode variants \u2192 publish manifest \u2192 serve segments via CDN.",
    "scale": "Parallelize processing by job; cache immutable segments globally. Estimate egress and encoding costs before optimizing metadata reads.",
    "failure": "Retry processing idempotently and retain job state. Clean abandoned uploads; do not expose a manifest before required segments exist.",
    "tradeoff": "More renditions improve playback compatibility but increase encoding/storage cost. Signed playback access needs a revocation strategy."
  },
  {
    "id": "drive",
    "name": "File storage / sync",
    "pattern": "Objects & versioning",
    "components": [
      "gateway",
      "auth",
      "service",
      "blob",
      "sql",
      "outbox",
      "queue",
      "idempotency",
      "security"
    ],
    "requirements": "Upload, download, share and sync files across devices. Clarify version history, concurrent edits and large files.",
    "api": "POST /files/upload-session; PUT chunks to signed URLs; POST /files/{id}/commit; GET /changes?cursor=.",
    "data": "File(id, owner, current_version); Version(file_id, version, object_ref, checksum); Permission(file_id, principal, role).",
    "flow": "Upload chunks \u2192 verify checksum \u2192 commit version conditionally \u2192 publish change \u2192 other devices pull changes and fetch missing content.",
    "scale": "Use resumable multipart uploads and incremental change cursors. Keep large bytes out of the metadata transaction.",
    "failure": "Orphan cleanup handles an upload with no metadata commit. Version preconditions detect conflicting writes rather than overwriting silently.",
    "tradeoff": "Last-writer-wins is simple but can lose edits. Conflict copies or richer merge semantics add user and implementation complexity."
  },
  {
    "id": "search-engine",
    "name": "Search / autocomplete",
    "pattern": "Derived retrieval",
    "components": [
      "gateway",
      "rate",
      "service",
      "search",
      "stream",
      "outbox",
      "cache",
      "shards"
    ],
    "requirements": "Ingest documents and return relevant, permission-safe results; for autocomplete, clarify prefix matching, popularity and personalization.",
    "api": "GET /search?q=&cursor=; GET /suggest?prefix=; internal document upsert/delete events.",
    "data": "Authoritative Document(id, version, content, ACL); index stores searchable fields, terms and ranking signals.",
    "flow": "Committed source updates \u2192 change pipeline \u2192 index shards. Query \u2192 candidate retrieval \u2192 rank \u2192 authorization filter \u2192 return.",
    "scale": "Partition the index, cache popular queries and bound query complexity. Autocomplete may use precomputed prefix candidates.",
    "failure": "Lag or poison documents need replay and dead-letter handling. Rebuild an index alongside the old one and switch an alias.",
    "tradeoff": "Freshness competes with indexing cost. A stale index must not override current access permissions."
  },
  {
    "id": "notification",
    "name": "Notification service",
    "pattern": "Async delivery",
    "components": [
      "gateway",
      "service",
      "sql",
      "outbox",
      "queue",
      "idempotency",
      "rate",
      "observability"
    ],
    "requirements": "Send email, push or SMS respecting preferences, priority and delivery windows. Define whether provider acceptance counts as delivery.",
    "api": "POST /notifications with idempotency key; GET /notifications/{id}; provider callbacks with verified signatures.",
    "data": "Notification(id, recipient, template, status); Attempt(notification_id, channel, provider_id, state); Preference(user, channel).",
    "flow": "Persist intent and outbox \u2192 route by channel \u2192 throttle workers \u2192 provider \u2192 ingest callback \u2192 update attempt state.",
    "scale": "Isolate channels and priorities; enforce provider quotas and per-recipient limits. Measure oldest pending job as well as depth.",
    "failure": "Timeouts leave provider outcome uncertain. Reconcile using provider IDs; deduplication cannot guarantee no duplicate external send without provider support.",
    "tradeoff": "Automatic fallback can duplicate delivery. Retry policy should reflect urgency and the cost of repeated notifications."
  },
  {
    "id": "commerce",
    "name": "Orders & checkout",
    "pattern": "Transactional workflows",
    "components": [
      "gateway",
      "auth",
      "service",
      "sql",
      "cache",
      "outbox",
      "queue",
      "saga",
      "idempotency"
    ],
    "requirements": "Create orders, reserve inventory, collect payment and confirm fulfillment. State the oversell and payment invariants.",
    "api": "POST /orders with idempotency key; POST /orders/{id}/cancel; GET /orders/{id}.",
    "data": "Order(id, buyer, state, amount); Reservation(sku, order, quantity, expiry); Payment(order_id, provider_ref, state).",
    "flow": "Create order \u2192 atomically reserve inventory \u2192 request payment \u2192 record outcome \u2192 confirm. Persist workflow transitions and emit via outbox.",
    "scale": "Partition inventory ownership carefully; cache product browsing, not the final available-to-purchase invariant.",
    "failure": "Payment timeout requires reconciliation, not an immediate second charge. Expired reservations and failed fulfillment need compensations.",
    "tradeoff": "Long reservations reduce overselling but hold scarce stock. Global transactions versus durable workflow depends on service boundaries."
  },
  {
    "id": "payments",
    "name": "Payments / ledger",
    "pattern": "Financial correctness",
    "components": [
      "gateway",
      "auth",
      "service",
      "sql",
      "idempotency",
      "outbox",
      "saga",
      "security",
      "observability"
    ],
    "requirements": "Accept a payment instruction, track provider outcome and maintain an auditable balanced ledger. Define currency and settlement boundaries.",
    "api": "POST /payments with idempotency key and amount in minor units; GET /payments/{id}; verified provider webhook.",
    "data": "Payment(id, key, payload_hash, status); LedgerEntry(transaction_id, account_id, debit, credit, currency). Enforce balance per transaction/currency.",
    "flow": "Persist instruction \u2192 call provider with stable key \u2192 record outcome \u2192 atomically post balanced entries \u2192 publish event. Reconcile callbacks and reports.",
    "scale": "Serialize competing balance-sensitive updates at the owning ledger boundary. Scale reporting through derived views.",
    "failure": "A provider timeout is an unknown outcome. Retain state and reconcile; never infer failure solely from missing response.",
    "tradeoff": "An external side effect cannot be rolled back by a local database transaction. Broker delivery guarantees do not imply exactly-once charging."
  },
  {
    "id": "booking",
    "name": "Ticket booking",
    "pattern": "Contention & reservations",
    "components": [
      "gateway",
      "rate",
      "service",
      "sql",
      "cache",
      "idempotency",
      "queue",
      "saga"
    ],
    "requirements": "Search events, hold a seat briefly and confirm after payment. No two confirmed bookings may own the same seat.",
    "api": "POST /events/{id}/holds {seat_ids}; POST /holds/{id}/confirm; GET /events/{id}/seats.",
    "data": "Seat(event_id, seat_id, state, hold_owner, hold_until, version); Booking(id, hold_id, payment_ref).",
    "flow": "Browse cached seat map \u2192 conditional transactional hold \u2192 payment \u2192 atomic confirm if hold is valid \u2192 publish booking.",
    "scale": "A hot event may need a waiting room and per-event admission limit. Keep seat ownership on an authoritative transactional boundary.",
    "failure": "Stale maps cannot authorize a sale. Expired holds, payment after expiry and duplicate callbacks need explicit refund/reconciliation policies.",
    "tradeoff": "Longer holds improve checkout completion but reduce availability. An admission queue improves fairness only with a specified scheduling policy."
  },
  {
    "id": "ride",
    "name": "Ride matching / delivery",
    "pattern": "Geospatial & state",
    "components": [
      "gateway",
      "auth",
      "realtime",
      "service",
      "nosql",
      "sql",
      "cache",
      "stream",
      "idempotency"
    ],
    "requirements": "Track available drivers, find nearby candidates and assign one driver per trip. Clarify update frequency, freshness and city boundaries.",
    "api": "PUT /drivers/{id}/location; POST /trips; POST /offers/{id}/accept; realtime trip updates.",
    "data": "DriverLocation(driver_id, cell, coordinates, updated_at); Trip(id, rider, state, driver_id, version).",
    "flow": "Location stream updates a geospatial view \u2192 search neighboring cells \u2192 rank candidates \u2192 issue expiring offer \u2192 atomically claim trip/driver ownership.",
    "scale": "Partition location views geographically and query adjacent cells. Distinguish approximate location freshness from authoritative assignment.",
    "failure": "Two offers can race; conditional transitions must reject a second owner. Expire stale locations and reconcile abandoned assignments.",
    "tradeoff": "Frequent location writes improve matching freshness but increase mobile battery, network and processing costs."
  },
  {
    "id": "limiter",
    "name": "Distributed rate limiter",
    "pattern": "Coordination & fairness",
    "components": [
      "gateway",
      "rate",
      "cache",
      "shards",
      "coordination",
      "observability"
    ],
    "requirements": "Enforce per-tenant and per-route budgets with a defined burst allowance. Decide acceptable overshoot and outage behavior.",
    "api": "Internal allow(key, cost, now) \u2192 allowed, remaining, retry_after. Return a useful retry signal to callers.",
    "data": "Bucket(key, tokens, updated_at) or window counters; policy(version, rate, burst). Updates must be atomic per key.",
    "flow": "Gateway identifies trusted tenant \u2192 evaluates local or shared bucket \u2192 admits or rejects \u2192 emits decision metrics.",
    "scale": "Partition counters by key; allocate token leases to gateways when strict per-request coordination is too expensive.",
    "failure": "Shared-store failure needs explicit fail-open, fail-closed or conservative local fallback. Clock issues can distort refill math.",
    "tradeoff": "Local buckets are fast but can overshoot global budgets; coordinated limits add latency and another dependency."
  },
  {
    "id": "crawler",
    "name": "Web crawler",
    "pattern": "Frontier & politeness",
    "components": [
      "dns",
      "service",
      "queue",
      "nosql",
      "blob",
      "idempotency",
      "rate",
      "search"
    ],
    "requirements": "Discover and fetch pages while respecting robots rules, host budgets and content limits. Define recrawl freshness and scope.",
    "api": "Enqueue seed URL; internal lease-next(host); record fetch result and discovered links.",
    "data": "URLState(normalized_url, last_fetch, next_due, status); HostBudget(host, next_allowed); content objects and fingerprints.",
    "flow": "Normalize/dedup URL \u2192 check policy \u2192 schedule host-aware frontier \u2192 fetch with bounds \u2192 store \u2192 parse links \u2192 reschedule.",
    "scale": "Shard frontier by host for politeness; separate fetchers from parsers and bound expanding URL spaces.",
    "failure": "Redeliver expired leases safely; handle redirect loops, huge pages and crawler traps. Revalidate target IPs to avoid internal-network fetches.",
    "tradeoff": "Global breadth-first order conflicts with host-local scheduling and freshness goals. Canonicalization can incorrectly merge distinct URLs."
  },
  {
    "id": "metrics",
    "name": "Metrics / logging platform",
    "pattern": "Streaming & time series",
    "components": [
      "gateway",
      "rate",
      "service",
      "stream",
      "shards",
      "blob",
      "analytics",
      "observability"
    ],
    "requirements": "Ingest telemetry, query recent trends and retain aggregates. Define allowed loss, cardinality, freshness and retention.",
    "api": "POST /ingest batch; GET /query?metric=&range=&labels=; versioned event schema.",
    "data": "Series(metric, label_set); Sample(series_id, event_time, value); durable ingest segments and downsampled partitions.",
    "flow": "Batch ingest \u2192 validate/cardinality budget \u2192 durable buffer \u2192 partitioned processors \u2192 hot query store + cold object retention.",
    "scale": "Partition by series/time, batch writes and preaggregate common windows. Guard against one tenant creating unbounded labels.",
    "failure": "Late and duplicate samples need defined aggregation semantics. Monitor consumer lag and recover via replay.",
    "tradeoff": "Long raw retention improves investigation but costs storage. Sampling and downsampling lose detail and can distort tail analysis."
  },
  {
    "id": "collab",
    "name": "Collaborative editor",
    "pattern": "Concurrent editing",
    "components": [
      "gateway",
      "auth",
      "realtime",
      "service",
      "sql",
      "stream",
      "blob",
      "ids"
    ],
    "requirements": "Allow concurrent edits, autosave and reconnect. Clarify offline edits, document size and rich-text semantics.",
    "api": "WebSocket document session; submit operation(op_id, base_version, payload); fetch snapshot plus operation cursor.",
    "data": "Document(id, snapshot_ref, version); Operation(doc_id, sequence, op_id, payload); Membership(doc_id, user, role).",
    "flow": "Authorize \u2192 apply OT or CRDT rules \u2192 durably record operation \u2192 broadcast \u2192 snapshot periodically. Reconnect replays or merges missing operations.",
    "scale": "Partition by document; very hot documents need careful fanout and operation batching. Compact history without breaking active clients.",
    "failure": "Deduplicate retransmits, recover unacknowledged operations and test concurrent delete/insert behavior. Presence is separate from durable edits.",
    "tradeoff": "OT and CRDT designs require precise transformation/merge rules; selecting the acronym alone does not establish correctness."
  },
  {
    "id": "jobs",
    "name": "Job scheduler",
    "pattern": "Leases & execution",
    "components": [
      "gateway",
      "service",
      "sql",
      "queue",
      "coordination",
      "idempotency",
      "observability"
    ],
    "requirements": "Schedule delayed or recurring jobs, execute retries and report outcomes. Define timezone, missed-run and overlap behavior.",
    "api": "POST /schedules; POST /jobs; GET /jobs/{id}; internal claim(job_id, lease_until).",
    "data": "Schedule(id, rule, timezone, next_due); Run(id, schedule_id, scheduled_at, attempt, state, lease_token).",
    "flow": "Find due schedules \u2192 atomically create unique run \u2192 enqueue \u2192 worker leases \u2192 execute \u2192 persist result \u2192 acknowledge.",
    "scale": "Partition due-time scans, index next_due and separate priority queues. Use unique scheduled occurrences to deduplicate scheduler failover.",
    "failure": "A worker can outlive its lease. Use fencing where possible and idempotent external effects; recover stalled runs with bounded retries.",
    "tradeoff": "At-least-once execution is practical; exactly-once external effects require cooperation with each destination."
  },
  {
    "id": "recommendations",
    "name": "Recommendation platform",
    "pattern": "Online / offline split",
    "components": [
      "gateway",
      "service",
      "cache",
      "stream",
      "blob",
      "analytics",
      "search",
      "deploy"
    ],
    "requirements": "Generate personalized candidates and rank within a latency budget. Define cold start, feedback delay and safety constraints.",
    "api": "GET /recommendations?user=&context=; POST /feedback with event_id, item_id, action, event_time.",
    "data": "Interaction(user, item, action, time); versioned features; Model(version, artifact_ref); candidate and ranking outputs.",
    "flow": "Feedback \u2192 stream/offline aggregates \u2192 training/evaluation \u2192 versioned model rollout. Online: fetch features \u2192 retrieve candidates \u2192 rank \u2192 filter.",
    "scale": "Precompute candidates and cache stable features. Bound ranking work and use fallback lists when dependencies miss deadlines.",
    "failure": "Handle stale features, missing users and model regressions. Log model version and exposure events to evaluate outcomes.",
    "tradeoff": "More expensive ranking may improve relevance but increase latency and cost. Offline scores alone do not prove product impact."
  },
  {
    "id": "distributed-cache",
    "name": "Distributed cache service",
    "pattern": "Partitioning & hot keys",
    "components": [
      "gateway",
      "service",
      "cache",
      "shards",
      "replicas",
      "coordination",
      "resilience",
      "observability"
    ],
    "requirements": "Provide bounded-latency get/set/delete with TTLs and explicit eviction behavior. Clarify whether the cache may lose data and whether multi-key atomic operations are required.",
    "api": "GET /keys/{key}; PUT /keys/{key} with TTL and optional version precondition; DELETE /keys/{key}. Bound object size and choose ownership semantics.",
    "data": "Entry(key, value, version, expires_at); partition ownership and membership epoch; per-node memory and eviction metadata. An external durable store remains authoritative if this is a cache.",
    "flow": "Client or proxy hashes key to an owner \u2192 owner reads/writes memory \u2192 optionally replicates \u2192 returns under the selected acknowledgement policy. Expiration and eviction are independent of durable-source deletion.",
    "scale": "Use virtual partitions or a stable hash ring to limit remapping; move ownership gradually. Hot keys need replication, request coalescing or local caching, since uniform key hashing does not balance unequal key popularity.",
    "failure": "A failed node causes cold misses and load redistribution. Gate refill traffic, refresh routing epochs and fence obsolete owners if authoritative write ownership is required. Replication lag may expose stale values.",
    "tradeoff": "Asynchronous replicas improve availability with potential staleness or loss. Strong per-key ordering requires a defined authority and failover protocol; consistent hashing alone provides neither replication nor consistency."
  }
];
export const roadmap=[
  [
    "Frame the problem",
    "Requirements, latency vs throughput, SLOs, capacity estimates, APIs, access patterns and core invariants.",
    "Write functional scope, peak QPS, bytes per record and a concrete correctness rule.",
    [
      "client",
      "observability",
      "ids"
    ],
    [
      "shortener"
    ]
  ],
  [
    "Build the request path",
    "DNS, HTTP, TLS boundaries, CDN, load balancers, gateway policy, authorization and admission control.",
    "Trace one authenticated request from device to source of truth and back.",
    [
      "dns",
      "cdn",
      "gateway",
      "auth",
      "rate"
    ],
    [
      "limiter"
    ]
  ],
  [
    "Model and scale data",
    "Indexes, transactions and isolation; relational vs key-value access; replication lag; partitions and hot keys.",
    "Define a schema, query indexes and a partition key; explain a stale-read example.",
    [
      "sql",
      "nosql",
      "replicas",
      "shards",
      "blob"
    ],
    [
      "booking",
      "drive"
    ]
  ],
  [
    "Make reads fast",
    "Cache-aside, invalidation, hot keys, stampedes, TTLs, search indexes and derived views.",
    "Specify cache key, allowed staleness, miss path and full-cache-outage behavior.",
    [
      "cache",
      "search"
    ],
    [
      "search-engine",
      "feed"
    ]
  ],
  [
    "Move work off the request",
    "Queues vs logs, acknowledgements, ordering, backpressure, outbox, retries and event-time processing.",
    "Draw a worker crash between side effect and ack; explain recovery without duplicate business effects.",
    [
      "queue",
      "stream",
      "outbox",
      "analytics"
    ],
    [
      "notification",
      "metrics",
      "video"
    ]
  ],
  [
    "Reason about distributed correctness",
    "Linearizability vs eventual consistency; CAP during partitions; quorum intersection and its limits; consensus, fencing, idempotency and sagas.",
    "State one invariant and which authority preserves it under retries, failover and network partition. CAP is a partition-time trade-off, not a generic pick-two menu.",
    [
      "idempotency",
      "coordination",
      "saga"
    ],
    [
      "payments",
      "commerce",
      "jobs"
    ]
  ],
  [
    "Handle realtime and special workloads",
    "Connection ownership, message ordering, resumption, fanout, geospatial indexes, merge semantics and online/offline features.",
    "Choose a partition key and explain a hot room, hot location or concurrent edit.",
    [
      "realtime",
      "service",
      "ids"
    ],
    [
      "chat",
      "ride",
      "collab",
      "recommendations",
      "crawler"
    ]
  ],
  [
    "Operate, recover and defend",
    "Tail latency, load shedding, retry budgets, fault isolation, multi-region RPO/RTO, canaries, auditability, retention and cost.",
    "Inject dependency timeout and regional loss; specify user impact, detection and recovery.",
    [
      "resilience",
      "observability",
      "regions",
      "security",
      "deploy"
    ],
    [
      "commerce",
      "metrics"
    ]
  ]
];
export const sources=[
  [
    "PostgreSQL: transaction isolation",
    "https://www.postgresql.org/docs/current/transaction-iso.html",
    "Transactions and concurrency"
  ],
  [
    "Apache Kafka: design",
    "https://kafka.apache.org/design/",
    "Logs, ordering and delivery boundaries"
  ],
  [
    "AWS: control and limit retries",
    "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_mitigate_interaction_failure_limit_retries.html",
    "Retry budgets, backoff and jitter"
  ],
  [
    "Redis: distributed locks",
    "https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",
    "Lease assumptions and lock safety"
  ]
];

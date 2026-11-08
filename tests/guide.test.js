import assert from 'node:assert/strict';
import { components, designs, roadmap, sources } from '../assets/master-data.js';

assert.equal(components.length, 28);
assert.equal(designs.length, 18);
assert.equal(roadmap.length, 8);
const componentIds = new Set(components.map(component => component.id));
const designIds = new Set(designs.map(design => design.id));
assert.equal(componentIds.size, components.length);
assert.equal(designIds.size, designs.length);
for (const component of components) {
  for (const field of ['purpose', 'when', 'tradeoff', 'check', 'question']) {
    assert.ok(component[field].length > 25, `${component.id}: missing ${field}`);
  }
}
for (const design of designs) {
  for (const id of design.components) assert.ok(componentIds.has(id), `${design.id}: unknown component ${id}`);
  for (const field of ['requirements', 'api', 'data', 'flow', 'scale', 'failure', 'tradeoff']) {
    assert.ok(design[field].length > 50, `${design.id}: missing ${field}`);
  }
}
for (const [, , checkpoint, ids, cases] of roadmap) {
  assert.ok(checkpoint.length > 30);
  for (const id of ids) assert.ok(componentIds.has(id));
  for (const id of cases) assert.ok(designIds.has(id));
}
for (const [, url] of sources) assert.equal(new URL(url).protocol, 'https:');
console.log('PASS: guide counts, unique IDs, complete component/design guides, roadmap references, source URLs');

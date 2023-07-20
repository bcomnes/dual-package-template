'use strict';
const test = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('node:test'))
const assert = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('node:assert'))
const { foo } = require('./index.js')

test('index export', async (t) => {
  assert.strictEqual(foo.bar, 'baz', 'exports as expected')
})

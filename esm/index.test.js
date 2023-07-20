import test from 'node:test'
import assert from 'node:assert'
import { foo } from './index.js'

test('index export', async (t) => {
  assert.strictEqual(foo.bar, 'baz', 'exports as expected')
})

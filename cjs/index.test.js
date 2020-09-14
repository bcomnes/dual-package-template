'use strict';
const tap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('tap'))
const { foo } = require('./index.js')

tap.test('exports', async (t) => {
  t.ok(foo)
  t.equal(foo.bar, 'baz', 'exports as expected')
})

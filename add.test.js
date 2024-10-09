import assert from 'node:assert'
import test from 'node:test'
import add from './add.js'

test('Add function', async t => {
  await t.test('Adds two numbers', () => {
    assert.strictEqual(add(5, 2), 7)
  })
})

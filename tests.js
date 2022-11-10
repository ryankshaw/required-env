const { describe, it } = require('node:test')
const assert = require('node:assert')
const requiredEnv = require('.')

describe('requiredEnv', () => {
  it('should find a set env var', () => {
    assert.strictEqual(requiredEnv('SOME_ENVIRONMENT_VARIABLE'), 'foo')
  })

  it('throws on non-existent env var', () => {
    assert.throws(() => {
      requiredEnv('SOMETHING_THAT_DOESNT_EXIST')
    })
  })
})

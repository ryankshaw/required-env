import { describe, it } from 'node:test'
import assert from 'node:assert'
import requiredEnv from './index.js'

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

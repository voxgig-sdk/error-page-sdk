
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ErrorPageSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ErrorPageSDK.test()
    equal(null !== testsdk, true)
  })

})

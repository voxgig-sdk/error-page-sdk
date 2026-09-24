
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ErrorPageSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ErrorPageSDK.test()
    equal(testsdk instanceof ErrorPageSDK, true,
      'ErrorPageSDK.test() must return a client synchronously')
  })

})

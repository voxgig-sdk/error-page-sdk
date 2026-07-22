-- ErrorPage SDK exists test

local sdk = require("error-page_sdk")

describe("ErrorPageSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

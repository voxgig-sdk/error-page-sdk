# ErrorPage SDK exists test

require "minitest/autorun"
require_relative "../ErrorPage_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ErrorPageSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

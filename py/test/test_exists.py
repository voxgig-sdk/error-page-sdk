# ErrorPage SDK exists test

import pytest
from errorpage_sdk import ErrorPageSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ErrorPageSDK.test(None, None)
        assert testsdk is not None

# ErrorPage SDK feature factory

from errorpage_sdk.feature.base_feature import ErrorPageBaseFeature
from errorpage_sdk.feature.ratelimit_feature import ErrorPageRatelimitFeature
from errorpage_sdk.feature.retry_feature import ErrorPageRetryFeature
from errorpage_sdk.feature.test_feature import ErrorPageTestFeature
from errorpage_sdk.feature.timeout_feature import ErrorPageTimeoutFeature


_FEATURES = {
    "base": lambda: ErrorPageBaseFeature(),
    "ratelimit": lambda: ErrorPageRatelimitFeature(),
    "retry": lambda: ErrorPageRetryFeature(),
    "test": lambda: ErrorPageTestFeature(),
    "timeout": lambda: ErrorPageTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

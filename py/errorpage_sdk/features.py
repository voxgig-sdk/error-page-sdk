# ErrorPage SDK feature factory

from errorpage_sdk.feature.base_feature import ErrorPageBaseFeature
from errorpage_sdk.feature.test_feature import ErrorPageTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ErrorPageBaseFeature(),
        "test": lambda: ErrorPageTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

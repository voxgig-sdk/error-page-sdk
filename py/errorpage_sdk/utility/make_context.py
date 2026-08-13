# ErrorPage SDK utility: make_context

from errorpage_sdk.core.context import ErrorPageContext


def make_context_util(ctxmap, basectx):
    return ErrorPageContext(ctxmap, basectx)

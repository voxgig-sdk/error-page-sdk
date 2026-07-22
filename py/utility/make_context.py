# ErrorPage SDK utility: make_context

from core.context import ErrorPageContext


def make_context_util(ctxmap, basectx):
    return ErrorPageContext(ctxmap, basectx)

# ErrorPage SDK utility: make_context
require_relative '../core/context'
module ErrorPageUtilities
  MakeContext = ->(ctxmap, basectx) {
    ErrorPageContext.new(ctxmap, basectx)
  }
end

# ErrorPage SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ErrorPageUtility.registrar = ->(u) {
  u.clean = ErrorPageUtilities::Clean
  u.done = ErrorPageUtilities::Done
  u.make_error = ErrorPageUtilities::MakeError
  u.feature_add = ErrorPageUtilities::FeatureAdd
  u.feature_hook = ErrorPageUtilities::FeatureHook
  u.feature_init = ErrorPageUtilities::FeatureInit
  u.fetcher = ErrorPageUtilities::Fetcher
  u.make_fetch_def = ErrorPageUtilities::MakeFetchDef
  u.make_context = ErrorPageUtilities::MakeContext
  u.make_options = ErrorPageUtilities::MakeOptions
  u.make_request = ErrorPageUtilities::MakeRequest
  u.make_response = ErrorPageUtilities::MakeResponse
  u.make_result = ErrorPageUtilities::MakeResult
  u.make_point = ErrorPageUtilities::MakePoint
  u.make_spec = ErrorPageUtilities::MakeSpec
  u.make_url = ErrorPageUtilities::MakeUrl
  u.param = ErrorPageUtilities::Param
  u.prepare_auth = ErrorPageUtilities::PrepareAuth
  u.prepare_body = ErrorPageUtilities::PrepareBody
  u.prepare_headers = ErrorPageUtilities::PrepareHeaders
  u.prepare_method = ErrorPageUtilities::PrepareMethod
  u.prepare_params = ErrorPageUtilities::PrepareParams
  u.prepare_path = ErrorPageUtilities::PreparePath
  u.prepare_query = ErrorPageUtilities::PrepareQuery
  u.graphql_body = ErrorPageUtilities::GraphqlBody
  u.graphql_errors = ErrorPageUtilities::GraphqlErrors
  u.result_basic = ErrorPageUtilities::ResultBasic
  u.result_body = ErrorPageUtilities::ResultBody
  u.result_headers = ErrorPageUtilities::ResultHeaders
  u.transform_request = ErrorPageUtilities::TransformRequest
  u.transform_response = ErrorPageUtilities::TransformResponse
}

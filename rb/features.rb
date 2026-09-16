# ErrorPage SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ErrorPageFeatures
  def self.make_feature(name)
    case name
    when "base"
      ErrorPageBaseFeature.new
    when "ratelimit"
      ErrorPageRatelimitFeature.new
    when "retry"
      ErrorPageRetryFeature.new
    when "test"
      ErrorPageTestFeature.new
    when "timeout"
      ErrorPageTimeoutFeature.new
    else
      ErrorPageBaseFeature.new
    end
  end
end

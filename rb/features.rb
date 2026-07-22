# ErrorPage SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ErrorPageFeatures
  def self.make_feature(name)
    case name
    when "base"
      ErrorPageBaseFeature.new
    when "test"
      ErrorPageTestFeature.new
    else
      ErrorPageBaseFeature.new
    end
  end
end

# ErrorPage SDK configuration

module ErrorPageConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ErrorPage",
        "slug" => "error-page",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://51-68-119-197.sslip.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "technology_detection" => {},
        },
      },
      "entity" => {
        "technology_detection" => {
          "fields" => [
            {
              "name" => "category",
              "short" => "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
              "type" => "`$STRING`",
            },
            {
              "format" => "float",
              "name" => "confidence",
              "short" => "Confidence level of the detection (0-100)",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "name",
              "short" => "Name of the detected technology",
              "type" => "`$STRING`",
            },
            {
              "name" => "version",
              "short" => "Version of the technology if detected",
              "type" => "`$STRING`",
            },
          ],
          "name" => "technology_detection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "https://example.com",
                        "kind" => "query",
                        "name" => "url",
                        "orig" => "url",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/techstack",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "techstack",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "url",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.technologies`",
                  },
                  "parts" => [
                    "api",
                    "techstack",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ErrorPageFeatures.make_feature(name)
  end
end

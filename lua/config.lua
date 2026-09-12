-- ErrorPage SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ErrorPage",
      slug = "error-page",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://51-68-119-197.sslip.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["technology_detection"] = {},
      },
    },
    entity = {
      ["technology_detection"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["short"] = "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "float",
            ["name"] = "confidence",
            ["short"] = "Confidence level of the detection (0-100)",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the detected technology",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["short"] = "Version of the technology if detected",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "technology_detection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/techstack",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "techstack",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.technologies`",
                },
                ["parts"] = {
                  "api",
                  "techstack",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

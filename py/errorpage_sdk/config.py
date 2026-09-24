# ErrorPage SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ErrorPage",
            "slug": "error-page",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://51-68-119-197.sslip.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "technology_detection": {},
            },
        },
        "entity": {
      "technology_detection": {
        "fields": [
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "short": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
          },
          {
            "name": "confidence",
            "title": "Confidence",
            "type": "`$NUMBER`",
            "short": "Confidence level of the detection (0-100)",
            "format": "float",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the detected technology",
          },
          {
            "name": "version",
            "title": "Version",
            "type": "`$STRING`",
            "short": "Version of the technology if detected",
          },
        ],
        "name": "technology_detection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/techstack",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "techstack",
                  },
                ],
                "parts": [
                  "api",
                  "techstack",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.technologies`",
                },
                "args": {
                  "query": [
                    {
                      "name": "url",
                      "orig": "url",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "https://example.com",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "url",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

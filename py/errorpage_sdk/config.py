# ErrorPage SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
            "type": "`$STRING`",
          },
          {
            "name": "confidence",
            "short": "Confidence level of the detection (0-100)",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "short": "Name of the detected technology",
            "type": "`$STRING`",
          },
          {
            "name": "version",
            "short": "Version of the technology if detected",
            "type": "`$STRING`",
          },
        ],
        "name": "technology_detection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/techstack",
                "parts": [
                  "api",
                  "techstack",
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.technologies`",
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

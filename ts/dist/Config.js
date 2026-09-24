"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ErrorPage',
        slug: "error-page",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://51-68-119-197.sslip.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            technology_detection: {},
        }
    };
    entity = {
        "technology_detection": {
            "fields": [
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "short": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)"
                },
                {
                    "name": "confidence",
                    "title": "Confidence",
                    "type": "`$NUMBER`",
                    "short": "Confidence level of the detection (0-100)",
                    "format": "float"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the detected technology"
                },
                {
                    "name": "version",
                    "title": "Version",
                    "type": "`$STRING`",
                    "short": "Version of the technology if detected"
                }
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "techstack"
                                }
                            ],
                            "parts": [
                                "api",
                                "techstack"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.technologies`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "url",
                                        "orig": "url",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "https://example.com"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
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
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
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
                    "short": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
                    "type": "`$STRING`"
                },
                {
                    "format": "float",
                    "name": "confidence",
                    "short": "Confidence level of the detection (0-100)",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "name",
                    "short": "Name of the detected technology",
                    "type": "`$STRING`"
                },
                {
                    "name": "version",
                    "short": "Version of the technology if detected",
                    "type": "`$STRING`"
                }
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
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
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
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.technologies`"
                            },
                            "parts": [
                                "api",
                                "techstack"
                            ]
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
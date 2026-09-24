"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TechnologyDetectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ERROR_PAGE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ERROR_PAGE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ErrorPageSDK.test();
        const ent = testsdk.TechnologyDetection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ERROR_PAGE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'technology_detection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)", "t": "`$STRING`", "key$": "category", "index$": 0 }, "confidence": { "a": true, "fo": "float", "h": "Confidence", "n": "confidence", "r": false, "sh": "Confidence level of the detection (0-100)", "t": "`$NUMBER`", "key$": "confidence", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the detected technology", "t": "`$STRING`", "key$": "name", "index$": 2 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "sh": "Version of the technology if detected", "t": "`$STRING`", "key$": "version", "index$": 3 } }, "name": "technology_detection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/techstack", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "https://example.com", "k": "query", "n": "url", "or": "url", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/techstack", "q": { "exist": ["url"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "techstack" }], "t": { "req": "`reqdata`", "res": "`body.technologies`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "technology_detection", "name__orig": "technology_detection", "Name": "TechnologyDetection", "name_": "technology_detection", "name-": "technology-detection", "NAME": "TECHNOLOGY_DETECTION", "index$": 0 }, { "active": true, "entity": "technology_detection", "key$": "BasicTechnologyDetectionFlow", "kind": "basic", "name": "BasicTechnologyDetectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "technology_detection_ref01" } }], "index$": 0 }] }, 'TechnologyDetection', { "GET /api/techstack": { "protocol": "http", "operationId": "detectTechStack", "responses": { "200": { "description": "Successful response with detected technology stack information", "content": { "application/json": { "schema": { "type": "object", "properties": { "url": { "description": "The analyzed URL", "format": "uri", "key$": "url", "type": "string" }, "technologies": { "description": "List of detected technologies", "items": { "properties": { "category": { "description": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)", "type": "string", "key$": "category" }, "confidence": { "description": "Confidence level of the detection (0-100)", "format": "float", "type": "number", "key$": "confidence" }, "name": { "description": "Name of the detected technology", "type": "string", "key$": "name" }, "version": { "description": "Version of the technology if detected", "type": "string", "key$": "version" } }, "type": "object", "index$": 0 }, "key$": "technologies", "type": "array" }, "timestamp": { "description": "Timestamp of the analysis", "format": "date-time", "key$": "timestamp", "type": "string" } } }, "example": { "url": "https://example.com", "technologies": [{ "name": "Nginx", "category": "Web Server", "version": "1.18.0", "confidence": 95.5 }, { "name": "Google Analytics", "category": "Analytics", "confidence": 100 }], "timestamp": "2024-01-15T10:30:00Z" } } } }, "400": { "description": "Bad request - Invalid URL parameter", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" } } }, "example": { "error": "Invalid URL", "message": "The provided URL parameter is not valid or is missing" } } } }, "404": { "description": "Website not found or unreachable", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "suggestions": { "type": "array", "description": "Suggestions for resolution", "items": { "type": "string" } } } }, "example": { "error": "Website unreachable", "message": "The specified website cannot be accessed", "suggestions": ["Check if the URL is correct", "Verify your network connection", "The website may be temporarily down"] } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" } } }, "example": { "error": "Internal Server Error", "message": "An unexpected error occurred while processing your request" } } } }, "503": { "description": "Service unavailable - Network error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" }, "suggestions": { "type": "array", "description": "Suggestions for resolution", "items": { "type": "string" } } } }, "example": { "error": "Network unreachable", "message": "The network is currently unreachable", "suggestions": ["Check your internet connection", "Try again later", "Contact your network administrator"] } } } } }, "parameters": [{ "name": "url", "in": "query", "description": "The URL of the website to analyze for technology stack detection", "required": true, "schema": { "type": "string", "format": "uri", "example": "https://example.com" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let technology_detection_ref01_data = Object.values(setup.data.existing.technology_detection)[0];
        // LIST
        const technology_detection_ref01_ent = client.TechnologyDetection();
        const technology_detection_ref01_match = {};
        const technology_detection_ref01_list = (await technology_detection_ref01_ent.list(technology_detection_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/technology_detection/TechnologyDetectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ErrorPageSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['technology_detection01', 'technology_detection02', 'technology_detection03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID': idmap,
        'ERROR_PAGE_TEST_LIVE': 'FALSE',
        'ERROR_PAGE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID'];
    const live = 'TRUE' === env.ERROR_PAGE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ErrorPageSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.ERROR_PAGE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TechnologyDetectionEntity.test.js.map


import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ErrorPageSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TechnologyDetectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ERROR_PAGE_TEST_LIVE=TRUE.
  afterEach(liveDelay('ERROR_PAGE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ErrorPageSDK.test()
    const ent = testsdk.TechnologyDetection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ERROR_PAGE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'technology_detection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":false,"short":"Category of the technology (e.g., Framework, CMS, CDN, Analytics)","type":"`$STRING`","index$":0},{"active":true,"format":"float","name":"confidence","req":false,"short":"Confidence level of the detection (0-100)","type":"`$NUMBER`","index$":1},{"active":true,"name":"name","req":false,"short":"Name of the detected technology","type":"`$STRING`","index$":2},{"active":true,"name":"version","req":false,"short":"Version of the technology if detected","type":"`$STRING`","index$":3}],"name":"technology_detection","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/techstack","json":"{\"operationId\":\"detectTechStack\",\"parameters\":[{\"description\":\"The URL of the website to analyze for technology stack detection\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"technologies\":[{\"category\":\"Web Server\",\"confidence\":95.5,\"name\":\"Nginx\",\"version\":\"1.18.0\"},{\"category\":\"Analytics\",\"confidence\":100,\"name\":\"Google Analytics\"}],\"timestamp\":\"2024-01-15T10:30:00Z\",\"url\":\"https://example.com\"},\"schema\":{\"properties\":{\"technologies\":{\"description\":\"List of detected technologies\",\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the technology (e.g., Framework, CMS, CDN, Analytics)\",\"type\":\"string\"},\"confidence\":{\"description\":\"Confidence level of the detection (0-100)\",\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the detected technology\",\"type\":\"string\"},\"version\":{\"description\":\"Version of the technology if detected\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"timestamp\":{\"description\":\"Timestamp of the analysis\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The analyzed URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with detected technology stack information\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Invalid URL\",\"message\":\"The provided URL parameter is not valid or is missing\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid URL parameter\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Website unreachable\",\"message\":\"The specified website cannot be accessed\",\"suggestions\":[\"Check if the URL is correct\",\"Verify your network connection\",\"The website may be temporarily down\"]},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"suggestions\":{\"description\":\"Suggestions for resolution\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Website not found or unreachable\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Internal Server Error\",\"message\":\"An unexpected error occurred while processing your request\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"},\"503\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Network unreachable\",\"message\":\"The network is currently unreachable\",\"suggestions\":[\"Check your internet connection\",\"Try again later\",\"Contact your network administrator\"]},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"suggestions\":{\"description\":\"Suggestions for resolution\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Service unavailable - Network error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/techstack","segments":[{"lit":"api"},{"lit":"techstack"}],"select":{"exist":["url"]},"transform":{"req":"`reqdata`","res":"`body.technologies`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"technology_detection","name__orig":"technology_detection","Name":"TechnologyDetection","name_":"technology_detection","name-":"technology-detection","NAME":"TECHNOLOGY_DETECTION","index$":0}, {"active":true,"entity":"technology_detection","key$":"BasicTechnologyDetectionFlow","kind":"basic","name":"BasicTechnologyDetectionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"technology_detection_ref01"}}],"index$":0}]}, 'TechnologyDetection')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let technology_detection_ref01_data = Object.values(setup.data.existing.technology_detection)[0] as any

    // LIST
    const technology_detection_ref01_ent = client.TechnologyDetection()
    const technology_detection_ref01_match: any = {}

    const technology_detection_ref01_list = (await technology_detection_ref01_ent.list(technology_detection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/technology_detection/TechnologyDetectionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ErrorPageSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['technology_detection01','technology_detection02','technology_detection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID': idmap,
    'ERROR_PAGE_TEST_LIVE': 'FALSE',
    'ERROR_PAGE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID']

  const live = 'TRUE' === env.ERROR_PAGE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ERROR_PAGE_TEST_TECHNOLOGY_DETECTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ErrorPageSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

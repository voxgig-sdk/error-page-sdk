
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ErrorPage',
        slug: "error-page",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://51-68-119-197.sslip.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      technology_detection: {
      },

    }
  }


  entity = {
    "technology_detection": {
      "fields": [
        {
          "name": "category",
          "short": "Category of the technology (e.g., Framework, CMS, CDN, Analytics)",
          "type": "`$STRING`"
        },
        {
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
              "parts": [
                "api",
                "techstack"
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.technologies`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


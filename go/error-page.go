package voxgigerrorpagesdk

import (
	"github.com/voxgig-sdk/error-page-sdk/go/core"
	"github.com/voxgig-sdk/error-page-sdk/go/entity"
	"github.com/voxgig-sdk/error-page-sdk/go/feature"
	_ "github.com/voxgig-sdk/error-page-sdk/go/utility"
)

// Type aliases preserve external API.
type ErrorPageSDK = core.ErrorPageSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ErrorPageEntity = core.ErrorPageEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ErrorPageError = core.ErrorPageError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTechnologyDetectionEntityFunc = func(client *core.ErrorPageSDK, entopts map[string]any) core.ErrorPageEntity {
		return entity.NewTechnologyDetectionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewErrorPageSDK = core.NewErrorPageSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewErrorPageSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ErrorPageSDK  { return NewErrorPageSDK(nil) }
func Test() *ErrorPageSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTechnologyDetectionEntityFunc func(client *ErrorPageSDK, entopts map[string]any) ErrorPageEntity


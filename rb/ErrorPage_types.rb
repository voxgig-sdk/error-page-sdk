# frozen_string_literal: true

# Typed models for the ErrorPage SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# TechnologyDetection entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechnologyDetection = Struct.new(
  :category,
  :confidence,
  :name,
  :version,
  keyword_init: true
)

# Request payload for TechnologyDetection#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechnologyDetectionListMatch = Struct.new(
  :category,
  :confidence,
  :name,
  :version,
  keyword_init: true
)


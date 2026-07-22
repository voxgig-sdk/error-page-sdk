<?php
declare(strict_types=1);

// Typed models for the ErrorPage SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** TechnologyDetection entity data model. */
class TechnologyDetection
{
    public ?string $category = null;
    public ?float $confidence = null;
    public ?string $name = null;
    public ?string $version = null;
}

/** Request payload for TechnologyDetection#list. */
class TechnologyDetectionListMatch
{
    public ?string $category = null;
    public ?float $confidence = null;
    public ?string $name = null;
    public ?string $version = null;
}


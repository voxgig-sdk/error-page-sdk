<?php
declare(strict_types=1);

// ErrorPage SDK base feature

class ErrorPageBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ErrorPageContext $ctx, array $options): void {}
    public function PostConstruct(ErrorPageContext $ctx): void {}
    public function PostConstructEntity(ErrorPageContext $ctx): void {}
    public function SetData(ErrorPageContext $ctx): void {}
    public function GetData(ErrorPageContext $ctx): void {}
    public function GetMatch(ErrorPageContext $ctx): void {}
    public function SetMatch(ErrorPageContext $ctx): void {}
    public function PrePoint(ErrorPageContext $ctx): void {}
    public function PreSpec(ErrorPageContext $ctx): void {}
    public function PreRequest(ErrorPageContext $ctx): void {}
    public function PreResponse(ErrorPageContext $ctx): void {}
    public function PreResult(ErrorPageContext $ctx): void {}
    public function PreDone(ErrorPageContext $ctx): void {}
    public function PreUnexpected(ErrorPageContext $ctx): void {}
}

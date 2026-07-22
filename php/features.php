<?php
declare(strict_types=1);

// ErrorPage SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ErrorPageFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ErrorPageBaseFeature();
            case "test":
                return new ErrorPageTestFeature();
            default:
                return new ErrorPageBaseFeature();
        }
    }
}

<?php
declare(strict_types=1);

// ErrorPage SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ErrorPageMakeContext
{
    public static function call(array $ctxmap, ?ErrorPageContext $basectx): ErrorPageContext
    {
        return new ErrorPageContext($ctxmap, $basectx);
    }
}

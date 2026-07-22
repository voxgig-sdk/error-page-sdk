<?php
declare(strict_types=1);

// ErrorPage SDK utility: prepare_body

class ErrorPagePrepareBody
{
    public static function call(ErrorPageContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

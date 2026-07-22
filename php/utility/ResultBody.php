<?php
declare(strict_types=1);

// ErrorPage SDK utility: result_body

class ErrorPageResultBody
{
    public static function call(ErrorPageContext $ctx): ?ErrorPageResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

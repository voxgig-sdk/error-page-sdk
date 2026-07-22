<?php
declare(strict_types=1);

// ErrorPage SDK utility: result_headers

class ErrorPageResultHeaders
{
    public static function call(ErrorPageContext $ctx): ?ErrorPageResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

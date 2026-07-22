<?php
declare(strict_types=1);

// ErrorPage SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ErrorPageUtility::setRegistrar(function (ErrorPageUtility $u): void {
    $u->clean = [ErrorPageClean::class, 'call'];
    $u->done = [ErrorPageDone::class, 'call'];
    $u->make_error = [ErrorPageMakeError::class, 'call'];
    $u->feature_add = [ErrorPageFeatureAdd::class, 'call'];
    $u->feature_hook = [ErrorPageFeatureHook::class, 'call'];
    $u->feature_init = [ErrorPageFeatureInit::class, 'call'];
    $u->fetcher = [ErrorPageFetcher::class, 'call'];
    $u->make_fetch_def = [ErrorPageMakeFetchDef::class, 'call'];
    $u->make_context = [ErrorPageMakeContext::class, 'call'];
    $u->make_options = [ErrorPageMakeOptions::class, 'call'];
    $u->make_request = [ErrorPageMakeRequest::class, 'call'];
    $u->make_response = [ErrorPageMakeResponse::class, 'call'];
    $u->make_result = [ErrorPageMakeResult::class, 'call'];
    $u->make_point = [ErrorPageMakePoint::class, 'call'];
    $u->make_spec = [ErrorPageMakeSpec::class, 'call'];
    $u->make_url = [ErrorPageMakeUrl::class, 'call'];
    $u->param = [ErrorPageParam::class, 'call'];
    $u->prepare_auth = [ErrorPagePrepareAuth::class, 'call'];
    $u->prepare_body = [ErrorPagePrepareBody::class, 'call'];
    $u->prepare_headers = [ErrorPagePrepareHeaders::class, 'call'];
    $u->prepare_method = [ErrorPagePrepareMethod::class, 'call'];
    $u->prepare_params = [ErrorPagePrepareParams::class, 'call'];
    $u->prepare_path = [ErrorPagePreparePath::class, 'call'];
    $u->prepare_query = [ErrorPagePrepareQuery::class, 'call'];
    $u->result_basic = [ErrorPageResultBasic::class, 'call'];
    $u->result_body = [ErrorPageResultBody::class, 'call'];
    $u->result_headers = [ErrorPageResultHeaders::class, 'call'];
    $u->transform_request = [ErrorPageTransformRequest::class, 'call'];
    $u->transform_response = [ErrorPageTransformResponse::class, 'call'];
});

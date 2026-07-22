<?php
declare(strict_types=1);

// ErrorPage SDK exists test

require_once __DIR__ . '/../errorpage_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ErrorPageSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

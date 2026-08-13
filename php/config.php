<?php
declare(strict_types=1);

// ErrorPage SDK configuration

class ErrorPageConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ErrorPage",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://51-68-119-197.sslip.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "technology_detection" => [],
                ],
            ],
            "entity" => [
        'technology_detection' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'category',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'confidence',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'technology_detection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'https://example.com',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/techstack',
                  'parts' => [
                    'api',
                    'techstack',
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.technologies`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ErrorPageFeatures::make_feature($name);
    }
}

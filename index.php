<?php

Kirby::plugin('medienbaecker/link', [
    'fields' => [
        'link' => [
            'props' => [
                'value' => function($value = null) {
                    return Yaml::decode($value);
                },
                'options' => function($options = ["url", "page", "email"]) {
                    return $options;
                }
            ]
        ]
    ],
    'translations' => array(
        'en' => require_once __DIR__ . '/languages/en.php',
        'de' => require_once __DIR__ . '/languages/de.php'
    ),
]);
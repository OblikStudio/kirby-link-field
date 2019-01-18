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
            ],
            'computed' => [
                'pages' => function() {

                    $pages = [];

                    foreach(site()->index() as $page) {
                        $pages[$page->uid()] = [
                            "title" => $page->title(),
                            "uid" => $page->uid()
                        ];
                    }

                    return $pages;

                }
            ]
        ]
    ],
    'translations' => [
        'en' => require_once __DIR__ . '/languages/en.php',
        'de' => require_once __DIR__ . '/languages/de.php'
    ],
]);
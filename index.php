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
                },
            ]
        ]
    ]
]);
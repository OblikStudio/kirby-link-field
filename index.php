<?php

namespace Oblik\LinkField;

load([
    'Oblik\\LinkField\\Link' => 'src/Link.php'
], __DIR__);

use Kirby\Cms\App;
use Kirby\Data\Yaml;

App::plugin('oblik/link-field', [
    'fields' => [
        'link' => [
            'mixins' => ['pagepicker', 'filepicker'],
            'props' => [
                'value' => function ($input = null) {
                    if (is_string($input)) {
                        // Value comes from a TXT file.
                        $data = Yaml::decode($input);
                    } else {
                        // Value comes from the panel and is serialized.
                        $data = $input;
                    }

                    if (empty($data['type'])) {
                        // Handles cases where the field was previously of type
                        // `url` and was not correctly formatted.
                        $data = [
                            'type' => 'url',
                            'value' => $input
                        ];
                    }

                    if (!empty($data['value'])) {
                        if (is_string($data['value'])) {
                            if ($data['type'] === 'page') {
                                $targetPage = kirby()->page($data['value']);

                                if ($targetPage) {
                                    // Value is put in an array because the Panel field expects one.
                                    $data['value'] = [$this->pageResponse($targetPage)];
                                }
                            } else if ($data['type'] === 'file') {
                                $targetFile = kirby()->file($data['value']);

                                if ($targetFile) {
                                    $data['value'] = [$this->fileResponse($targetFile)];
                                }
                            }
                        } else {
                            // Value came from the panel and is a serialized Page or File.
                        }
                    }

                    return $data;
                },
                'options' => function ($value = ['url', 'page', 'file', 'email', 'tel']) {
                    return $value;
                },
                'settings' => function ($value = []) {
                    return $value;
                }
            ],
            'methods' => [
                'pageResponse' => function ($page) {
                    return $page->panelPickerData();
                },
                'fileResponse' => function ($file) {
                    return $file->panelPickerData([
                        'text' => '{{ file.id }}'
                    ]);
                }
            ],
            'api' => function () {
                return [
                    [
                        'pattern' => '/link-files',
                        'method' => 'GET',
                        'action' => function () {
                            return $this->field()->filepicker([
                                'query' => 'site.files.add(site.index.files)',
                                'text' => '{{ file.id }}'
                            ]);
                        }
                    ],
                    [
                        'pattern' => '/link-pages',
                        'method' => 'GET',
                        'action' => function () {
                            return $this->field()->pagepicker([
                                'parent' => $this->requestQuery('parent')
                            ]);
                        }
                    ]
                ];
            },
            'save' => function ($data) {
                $type = $data['type'] ?? null;
                $value = $data['value'] ?? null;

                if (!$type || !$value) {
                    return null;
                }

                // Store just the id of a file or a page.
                if ($type === 'page' || $type === 'file') {
                    $data['value'] = $value[0]['id'] ?? null;
                }

                return $data;
            }
        ]
    ],
    'translations' => [
        'en' => require_once __DIR__ . '/languages/en.php',
        'de' => require_once __DIR__ . '/languages/de.php'
    ],
    'fieldMethods' => [
        'toLinkObject' => function ($field) {
            $data = $field->yaml();

            if (empty($data['type']) || empty($data['value'])) {
                $data = [
                    'type' => 'url',
                    'value' => $field->value()
                ];
            }

            return new Link($data);
        }
    ]
]);

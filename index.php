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
            'methods' => [
                'pageResponse' => function ($page) {
                    $thumb = [
                        'width'  => 100,
                        'height' => 100
                    ];
                    $image = $page->panelImage($this->image, $thumb);
                    $model = $this->model();
                    return [
                        'text'        => $page->toString($this->text ?? '{{ page.title }}'),
                        'link'        => $page->panelUrl(true),
                        'id'          => $page->id(),
                        'info'        => $page->toString($this->info ?? false),
                        'image'       => $image,
                        'icon'        => $page->panelIcon($image),
                        'hasChildren' => $page->hasChildren(),
                    ];
                },
            ],
            'api' => function() {
                return [
                    [
                        'pattern' => '/get-pages',
                        'action' => function () {
                            $field = $this->field();
                            
                            if (!$parent = $this->site()->find($this->requestQuery('parent'))) {
                                $parent = $this->site();
                            }
                            $pages = $parent->children();
                            $model = [
                                'id'    => $parent->id() == '' ? null : $parent->id(),
                                'title' => t('link-field.page')
                            ];
                            
                            $children = [];
                            foreach ($pages as $index => $page) {
                                if ($page->isReadable() === true) {
                                    $children[] = $field->pageResponse($page);
                                }
                            }
                            return [
                                'model' => $model,
                                'pages' => $children
                            ];
                        }
                    ]
                ];
            }
        ]
    ],
    'translations' => [
        'en' => require_once __DIR__ . '/languages/en.php',
        'de' => require_once __DIR__ . '/languages/de.php'
    ],
]);
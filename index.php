<?php

Kirby::plugin('medienbaecker/link', [
    'fields' => [
        'link' => [
            'props' => [
                'value' => function($value = null) {
                    return Yaml::decode($value);
                },
                'options' => function($options = ["url", "email", "page", "file"]) {
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
                'fileResponse' => function ($file) {
                    $thumb = [
                        'width'  => 100,
                        'height' => 100
                    ];
                    $image = $file->panelImage($this->image, $thumb);
                    $model = $this->model();
                    $uuid  = $file->parent() === $model ? $file->filename() : $file->id();
                    return [
                        'filename' => $file->filename(),
                        'text'     => $file->toString($this->text),
                        'link'     => $file->panelUrl(true),
                        'id'       => $file->id(),
                        'uuid'     => $uuid,
                        'url'      => $file->url(),
                        'info'     => $file->toString($this->info ?? false),
                        'image'    => $image,
                        'icon'     => $file->panelIcon($image),
                        'type'     => $file->type(),
                    ];
                }
            ],
            'api' => function() {
                return [
                    [
                        'pattern' => '/get/(:any)',
                        'action' => function ($type) {
                            if($type == "pages") {
                                $field = $this->field();
                                if (!$parent = $this->site()->find($this->requestQuery('parent'))) {
                                    $parent = $this->site();
                                }
                                $pages = $parent->children();
                                $model = [
                                    'id'    => null,
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
                            if($type == "files") {
                                $field = $this->field();
                                $model = [
                                    'id'    => null,
                                    'title' => t('link-field.file')
                                ];
                                $files = $field->model()->query("page.files", 'Kirby\Cms\Files');
                                $data  = [];
                                foreach ($files as $index => $file) {
                                    $data[] = $field->fileResponse($file);
                                }
                                return $data;
                            }
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
    'fieldMethods' => [
        'toHref' => function ($field) {
            if($field->isNotEmpty()) {
                $type = $field->yaml()["type"];
                $link = $field->yaml()["link"];
                $href = "";
                if($type == "email"){
                    $href .= "mailto:";
                }
                if($type == "phone") {
                    $link = str::replace($link, array(' ', '/', '-', '.'), '');
                    $href .= "tel:";
                }
                if($type == "page" AND $linkPage = page($link)) {
                    $link = $linkPage->url();
                }
                if($type == "file" AND $linkFile = $field->parent()->file($link)) {
                    $link = $linkFile->url();
                }
                $href .= $link;
                return $href;
            }
        }
    ]
]);
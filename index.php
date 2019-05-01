<?php

$fieldsSource = $kirby->root('kirby') . DS . 'config' . DS . 'fields';
$pagesField = include $fieldsSource . DS . 'pages.php';
$filesField = include $fieldsSource . DS . 'files.php';

Kirby::plugin('medienbaecker/link', [
  'fields' => [
    'link' => [
      'props' => [
        'value' => function ($value = null) {
          $data = Yaml::decode($value);
          $page = $data['page'] ?? null;
          $file = $data['file'] ?? null;

          if (is_string($page)) {
            $data['page'] = [
              $this->pageResponse(kirby()->page($page))
            ];
          }

          if (is_string($file)) {
            $data['file'] = [
              $this->fileResponse(kirby()->file($file, $this->model()))
            ];
          }

          return $data;
        },
        'options' => function ($value = ['url', 'page', 'file', 'email', 'tel']) {
          return $value;
        }
      ],
      'methods' => [
        'pageResponse' => $pagesField['methods']['pageResponse'],
        'fileResponse' => $filesField['methods']['fileResponse']
      ],
      'api' => function () use ($pagesField) {
        return [
          [
            'pattern' => '/files',
            'method' => 'GET',
            'action' => function () { // kirby/config/fields/files.php
              $field = $this->field();
              $pagesFiles = site()->index()->files();
              $files = site()->files()->add($pagesFiles);
              $data = [];

              foreach ($files as $index => $file) {
                $data[] = $field->fileResponse($file);
              }

              return $data;
            }
          ],
          [
            'pattern' => '/pages',
            'method' => 'GET',
            'action' => $pagesField['api']()[0]['action']
          ]
        ];
      },
      'save' => function ($value = null) {
        if (!empty($value['page'])) {
          $value['page'] = $value['page'][0]['id'] ?? '';
        }

        if (!empty($value['file'])) {
          $value['file'] = $value['file'][0]['id'] ?? '';
        }

        return $value;
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
        $data = $field->yaml();

        if (!empty($data["type"]) AND !empty($data["link"])) {
          $type = $data["type"];
          $link = $data["link"];
        } else if (!empty($data[0])) {
          // Fields like "link: https://example.com" are returned as
          // an array with the first element holding the value. This
          // adds support for fields of type `url` or `text` that
          // are supposed to be links.
          return $data[0];
        } else {
          return "";
        }

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

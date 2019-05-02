<?php

require_once __DIR__ . DS . 'src' . DS . 'Link.php';

$fieldsSource = $kirby->root('kirby') . DS . 'config' . DS . 'fields';
$pagesField = include $fieldsSource . DS . 'pages.php';
$filesField = include $fieldsSource . DS . 'files.php';

Kirby::plugin('medienbaecker/link', [
  'fields' => [
    'link' => [
      'props' => [
        'value' => function ($data = null) {
          if (is_string($data)) {
            $data = Yaml::decode($data);
            $type = $data['type'] ?? null;
            $value = $data['value'] ?? null;

            if ($value) {
              if ($type === 'page' && $page = kirby()->page($value)) {
                $data['page'] = [ $this->pageResponse($page) ];
              } else if ($type === 'file' && $file = kirby()->file($value, $this->model())) {
                $data['file'] = [ $this->fileResponse($file) ];
              } else {
                $data[$type] = $value;
              }
            }
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
      'save' => function ($data) {
        $type = $data['type'] ?? null;

        if (!$type) {
          return false;
        }

        if ($type === 'page') {
          $value = $data['page'][0]['id'] ?? null;
        } else if ($type === 'file') {
          $value = $data['file'][0]['id'] ?? null;
        } else {
          $value = $data[$type] ?? null;
        }

        $saved = [
          'type' => $type,
          'value' => $value
        ];

        return $saved;
      }
    ]
  ],
  'translations' => [
    'en' => require_once __DIR__ . '/languages/en.php',
    'de' => require_once __DIR__ . '/languages/de.php'
  ],
  'fieldMethods' => [
    'toLink' => function ($field) {
      return new LinkField\Link($field);
    }
  ]
]);

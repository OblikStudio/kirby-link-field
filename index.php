<?php

require_once __DIR__ . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'Link.php';

$fieldsSource = $kirby->root('kirby') . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'fields';
$pagesField = include $fieldsSource . DIRECTORY_SEPARATOR . 'pages.php';
$filesField = include $fieldsSource . DIRECTORY_SEPARATOR . 'files.php';

Kirby::plugin('medienbaecker/link', [
  'fields' => [
    'link' => [
      'props' => [
        'value' => function ($data = []) {
          if (is_string($data)) {
            $data = Yaml::decode($data);
          }

          $type = $data['type'] ?? null;
          $value = $data['value'] ?? null;

          if (!$type || !$value) {
            return null;
          }

          if (is_string($value)) {
            if ($type === 'page' && $page = kirby()->page($value)) {
              $data['value'] = [ $this->pageResponse($page) ];
            } else if ($type === 'file' && $file = kirby()->file($value, $this->model())) {
              $data['value'] = [ $this->fileResponse($file) ];
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
    'toLink' => function ($field) {
      $data = $field->yaml();

      if (!empty($data['type']) && !empty($data['value'])) {
        return new LinkField\Link($field, $data);
      } else {
        return null;
      }
    }
  ]
]);

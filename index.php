<?php

namespace LinkField;

use Yaml;
use Kirby;
use LinkField\Link;

require_once __DIR__ . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'Link.php';

Kirby::plugin('medienbaecker/link', [
  'fields' => [
    'link' => [
      'mixins' => ['pagepicker', 'filepicker'],
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
        'pageResponse' => function ($page) {
          return $page->panelPickerData();
        },
        'fileResponse' => function ($file) {
          return $file->panelPickerData();
        }
      ],
      'api' => function () {
        return [
          [
            'pattern' => '/files',
            'method' => 'GET',
            'action' => function () {
              return $this->field()->filepicker([
                'query' => 'site.index.files'
              ]);
            }
          ],
          [
            'pattern' => '/pages',
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
    'toLink' => function ($field) {
      $data = $field->yaml();

      if (!empty($data['type']) && !empty($data['value'])) {
        return new Link($field, $data);
      } else {
        return null;
      }
    }
  ]
]);

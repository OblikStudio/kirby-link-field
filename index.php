<?php

namespace Oblik\LinkField;

load([
	'Oblik\\LinkField\\Link' => 'src/Link.php'
], __DIR__);

use Kirby\Cms\App;
use Kirby\Data\Yaml;

$pagesConfig = include kirby()->root('kirby') . '/config/fields/pages.php';
$filesConfig = include kirby()->root('kirby') . '/config/fields/files.php';

App::plugin('oblik/link-field', [
	'options' => [
		'linkTypes' => [
			'url',
			'page',
			'file',
			'email',
			'tel'
		],
		'settings' => [
			'text' => [
				'width' => '1/2',
				'type' => 'text',
				'label' => '$label.text',
			],
			'popup' => [
				'width' => '1/4',
				'type' => 'toggle',
				'label' => '$label.popup',
			],
			'hash' => [
				'width' => '1/4',
				'type' => 'text',
				'label' => '$label.fragment',
				'placeholder' => '$placeholder.elementid',
			],
		]
	],
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

					if (empty($data['type']) && !empty($input)) {
						// Handles cases where the field was previously of type
						// `url` and still has `"http://..."` as value.
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
								} else {
									$data['value'] = [];
								}
							} elseif ($data['type'] === 'file') {
								$targetFile = kirby()->file($data['value']);

								if ($targetFile) {
									$data['value'] = [$this->fileResponse($targetFile)];
								} else {
									$data['value'] = [];
								}
							}
						} else {
							// Value came from the panel and is a serialized Page or File.
						}
					}

					return $data;
				},
				'linkTypes' => function ($value = null) {
					if (!is_array($value)) {
						$value = kirby()->option('oblik.link-field.linkTypes');
					}

					return $value;
				},
				'settings' => function ($value = null) {
					$config = kirby()->option('oblik.link-field.settings');

					if (is_array($value) && is_array($config)) {
						$value = array_replace_recursive($config, $value);
					} else {
						$value = $config;
					}

					if (is_array($value)) {
						$value = array_filter($value);
					}

					if (empty($value)) {
						$value = null;
					}

					return $value;
				},
				'pages' => function ($value = []) {
					return array_merge([
						'query' => 'site.pages'
					], $value);
				},
				'files' => function ($value = []) {
					return array_merge([
						'query' => 'site.files.add(site.index.files)'
					], $value);
				}
			],
			'methods' => [
				'pageResponse' => $pagesConfig['methods']['pageResponse'],
				'fileResponse' => $filesConfig['methods']['fileResponse']
			],
			'api' => function () use ($pagesConfig, $filesConfig) {
				return [
					[
						'pattern' => '/link-pages',
						'method' => 'GET',
						'action' => $pagesConfig['api']()[0]['action']
					],
					[
						'pattern' => '/link-files',
						'method' => 'GET',
						'action' => $filesConfig['api']()[0]['action']
					]
				];
			},
			'save' => function ($data) {
				if (is_array($data)) {
					$data = array_filter($data);
					$type = $data['type'] ?? null;
					$value = $data['value'] ?? null;
				}

				if (empty($type) || empty($value)) {
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
			if ($field->isEmpty()) {
				return null;
			}

			$data = $field->yaml();

			if (!is_array($data)) {
				$data = [];
			}

			if (empty($data['type'])) {
				$data['type'] = 'url';
			}

			if (empty($data['value'])) {
				$data['value'] = $field->value();
			}

			return new Link($data);
		}
	]
]);

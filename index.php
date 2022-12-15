<?php

namespace Oblik\LinkField;

load([
	'Oblik\\LinkField\\Link' => 'src/Link.php'
], __DIR__);

use Kirby\Cms\App;
use Kirby\Data\Yaml;

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

					if (empty($data['type']) && is_string($input) && strpos($input, 'http') === 0) {
						// Handles cases where the field was previously of type
						// `url` and still a URL as plain value.
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

					if (empty($data)) {
						// Value could be an empty array when the field is empty
						// in the TXT file and is YAML-decoded, so make sure to
						// not return `[]`.
						return '';
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
					if ($value === false) {
						return null;
					}

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
						return null;
					}

					return $value;
				},
				'pages' => function ($value = []) {
					return array_merge([
						'query' => 'site.pages',
						'search' => true
					], $value);
				},
				'files' => function ($value = []) {
					return array_merge([
						'query' => 'site.files.add(site.index.files)',
						'search' => true
					], $value);
				}
			],
			'methods' => [
				'pageResponse' => function ($page) {
					$params = array_replace($this->pages() ?? [], [
						'model' => $page
					]);

					return $page->panel()->pickerData($params);
				},
				'fileResponse' => function ($file) {
					$params = array_replace($this->files() ?? [], [
						'model' => $file
					]);

					return $file->panel()->pickerData($params);
				}
			],
			'api' => function () {
				return [
					[
						'pattern' => '/link-pages',
						'method' => 'GET',
						'action' => function () {
							$params = array_replace($this->field()->pages(), [
								'page' => $this->requestQuery('page'),
								'parent' => $this->requestQuery('parent'),
								'search' => $this->requestQuery('search')
							]);

							return $this->field()->pagepicker($params);
						}
					],
					[
						'pattern' => '/link-files',
						'method' => 'GET',
						'action' => function () {
							$params = array_merge($this->field()->files(), [
								'page' => $this->requestQuery('page'),
								'search' => $this->requestQuery('search'),
							]);

							return $this->field()->filepicker($params);
						}
					]
				];
			},
			'isEmpty' => function ($input) {
				// Validates the value when `required: true`.
				return !($input['value'] ?? null);
			},
			'save' => function ($data) {
				$value = $data['value'] ?? null;

				// Store just the id of a file or a page.
				if (is_array($value)) {
					$data['value'] = $value[0]['uuid'] ?? null;
				}

				if (is_array($data)) {
					$data = array_filter($data);
				}

				return $data;
			}
		]
	],
	'translations' => [
		'en' => require 'languages/en.php',
		'de' => require 'languages/de.php',
		'tr' => require 'languages/tr.php',
		'fr' => require 'languages/fr.php'
	],
	'fieldMethods' => [
		'toLinkObject' => function ($field) {
			$value = $field->value();

			if (is_string($value) && strpos($value, 'http') === 0) {
				return new Link([
					'type' => 'url',
					'value' => $value
				]);
			}

			$data = $field->yaml();

			return new Link($data);
		},
		'toValidLink' => function ($field) {
			$linkObject = $field->toLinkObject();
			return $linkObject->isNotEmpty() ? $linkObject : null;
		}
	]
]);

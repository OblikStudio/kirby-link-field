<?php

namespace Oblik\LinkField;

use Kirby\Cms\App;
use Kirby\Cms\Field;
use Kirby\Data\Yaml;
use Oblik\LinkField\Link;
use PHPUnit\Framework\TestCase;

final class LinkTest extends TestCase
{
	public function testLink()
	{
		$link = new Link([
			'type' => 'url',
			'value' => 'https://example.com'
		]);

		$this->assertEquals('https://example.com', $link->href());
		$this->assertEquals('https://example.com', $link->title());
	}

	public function testTelLink()
	{
		$link = new Link([
			'type' => 'tel',
			'value' => '123 / 456 . 789'
		]);

		$this->assertEquals('tel:123456789', $link->href());
		$this->assertEquals('123 / 456 . 789', $link->title());
	}

	public function testMailLink()
	{
		$link = new Link([
			'type' => 'email',
			'value' => 'test@example.com'
		]);

		$this->assertEquals('mailto:test@example.com', $link->href());
		$this->assertEquals('test@example.com', $link->title());
	}

	public function testPageLink()
	{
		$app = new App([
			'roots' => [
				'index' => __DIR__
			],
			'site' => [
				'children' => [
					[
						'slug' => 'test',
						'content' => [
							'title' => 'Test Page'
						]
					]
				]
			]
		]);

		$link = new Link([
			'type' => 'page',
			'value' => 'test'
		]);

		$this->assertEquals($app->page('test'), $link->page());
		$this->assertEquals('Test Page', $link->title());
	}

	public function testFileLink()
	{
		$app = new App([
			'roots' => [
				'index' => __DIR__
			],
			'site' => [
				'files' => [
					[
						'filename' => 'test.svg'
					]
				]
			]
		]);

		$link = new Link([
			'type' => 'file',
			'value' => 'test.svg'
		]);

		$this->assertEquals($app->file('test.svg'), $link->file());
		$this->assertEquals('test.svg', $link->title());
	}

	public function testPropertyAccess()
	{
		$link = new Link([
			'type' => 'url',
			'value' => 'https://example.com',
			'text' => 'test',
			'foo' => 'bar'
		]);

		$this->assertEquals('url', $link->type());
		$this->assertEquals('https://example.com', $link->value());
		$this->assertEquals('test', $link->text());
		$this->assertEquals('bar', $link->foo());
		$this->assertEquals(null, $link->nonExistent());
	}

	public function testAttr()
	{
		$link = new Link([
			'type' => 'url',
			'value' => 'https://example.com'
		]);

		$attr = $link->attr([
			'testAttr' => 'test'
		]);

		$this->assertEquals(
			'href="https://example.com" testattr="test"',
			$attr
		);
	}

	public function testAddsRel()
	{
		$link = new Link([
			'type' => 'url',
			'value' => 'https://example.com',
			'popup' => true
		]);

		$this->assertEquals(
			'href="https://example.com" rel="noopener noreferrer" target="_blank"',
			$link->attr()
		);
	}

	public function testCreatesTag()
	{
		$link = new Link([
			'type' => 'url',
			'value' => 'https://example.com',
			'text' => 'my text',
			'popup' => true,
			'hash' => 'foo'
		]);

		$html = $link->tag([
			'testAttr' => 'test'
		]);

		$this->assertEquals(
			'<a href="https://example.com#foo" rel="noopener noreferrer" target="_blank" testattr="test">my text</a>',
			$html
		);
	}

	public function testTagWithInvalidHref()
	{
		$link = new Link([
			'type' => 'page',
			'value' => 'non-existent'
		]);

		$html = $link->tag();

		$this->assertEquals(
			'<a>non-existent</a>',
			$html
		);
	}

	public function testCastToString()
	{
		$link = new Link([
			'type' => 'email',
			'value' => 'test@example.com'
		]);

		$this->assertEquals(
			'mailto:test@example.com',
			(string) $link
		);
	}

	public function testFieldMethod()
	{
		$data = [
			'type' => 'url',
			'value' => 'https://example.com',
			'foo' => 'bar'
		];

		$field = new Field(null, 'test', Yaml::encode($data));
		$link = $field->toLinkObject();

		$this->assertInstanceOf(Link::class, $link);
		$this->assertEquals($data, $link->data());
	}

	public function testFieldPlainURL()
	{
		$field = new Field(null, 'test', 'https://example.com');
		$link = $field->toLinkObject();
		$this->assertEquals('https://example.com', $link->url());
	}

	public function testFieldEmpty()
	{
		$field = new Field(null, 'test', null);
		$field2 = new Field(null, 'test', '');

		$this->assertEquals(null, $field->toLinkObject());
		$this->assertEquals(null, $field2->toLinkObject());
	}
}

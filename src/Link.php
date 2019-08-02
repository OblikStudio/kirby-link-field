<?php

namespace Oblik\LinkField;

use Kirby\Http\Url;
use Kirby\Toolkit\Str;
use Kirby\Toolkit\Html;

class Link
{
    function __construct($field, $data)
    {
        $this->field = $field;
        $this->data = $data;

        $this->type = $this->data['type'];
        $this->value = $this->data['value'];
        $this->popup = $this->data['popup'] ?? false;
        $this->hash = $this->data['hash'] ?? null;
        $this->text = $this->data['text'] ?? null;

        $this->page = null;
        $this->file = null;

        if ($this->value) {
            if ($this->type === 'page') {
                $this->page = kirby()->page($this->value);
            }

            if ($this->type === 'file') {
                $this->file = kirby()->file($this->value, $this->field->model());
            }
        }

        $this->parts = Url::toObject($this->url() ?? '');
    }

    function __call($name, $arguments = [])
    {
        return $this->parts->$name();
    }

    function __toString()
    {
        return $this->href();
    }

    public function text()
    {
        return $this->text ?? '';
    }

    public function title()
    {
        $text = $this->text;

        if (!empty($text)) {
            return $text;
        }

        if ($this->page) {
            $text = $this->page->title()->value();
        }

        if ($this->file) {
            $text = $this->file->title()->value();

            if (!$text) {
                $text = $this->file->filename();
            }
        }

        if (empty($text)) {
            $text = $this->value;
        }

        return $text;
    }

    public function url()
    {
        $value = null;

        if ($this->type === 'url') {
            $value = $this->value;
        } else if ($this->type === 'page' && $this->page) {
            $value = $this->page->url();
        } else if ($this->type === 'file' && $this->file) {
            $value = $this->file->url();
        }

        if (is_string($value) && $this->hash) {
            $value .= '#' . $this->hash;
        }

        return $value;
    }

    public function href()
    {
        if ($this->type === 'tel') {
            return 'tel:' . Str::replace($this->value, [' ', '/', '-', '.'], '');
        } else if ($this->type === 'email') {
            return 'mailto:' . $this->value;
        } else {
            return $this->url();
        }
    }

    public function attributes($attr = [])
    {
        $attributes = [
            'href' => $this->href()
        ];

        if ($this->popup === true) {
            $attributes['target'] = '_blank';
        }

        return array_merge($attributes, $attr);
    }

    public function attr($attr = [])
    {
        return Html::attr($this->attributes($attr));
    }

    public function tag($attr = [])
    {
        $href = $this->href();

        if (strpos($href, 'http') === 0) { // https://github.com/getkirby/kirby/issues/1734
            return Html::a($href, $this->title(), $this->attributes($attr)); // https://github.com/getkirby/kirby/issues/1733
        } else {
            return Html::tag('a', $this->title(), $this->attributes($attr));
        }
    }
}

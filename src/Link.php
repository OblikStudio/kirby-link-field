<?php

namespace Oblik\LinkField;

use Kirby\Toolkit\Html;

class Link
{
    protected $data;
    protected $page;
    protected $file;

    function __construct(array $data)
    {
        $this->data = $data;
        $this->page = null;
        $this->file = null;

        if ($this->value()) {
            if ($this->type() === 'page') {
                $this->page = kirby()->page($this->value());
            }

            if ($this->type() === 'file') {
                $this->file = kirby()->file($this->value());
            }
        }
    }

    function __call($name, $arguments = [])
    {
        return $this->$name ?? $this->data[$name] ?? null;
    }

    function __toString()
    {
        return $this->href();
    }

    public function title()
    {
        $text = $this->text();

        if (!empty($text)) {
            return $text;
        }

        if ($this->page()) {
            $text = $this->page()->title()->value();
        }

        if ($this->file()) {
            $text = $this->file()->title()->value();

            if (!$text) {
                $text = $this->file()->filename();
            }
        }

        if (empty($text)) {
            $text = $this->value();
        }

        return $text;
    }

    public function url()
    {
        $value = null;

        if ($this->type() === 'url') {
            $value = $this->value();
        } else if ($this->type() === 'page' && $this->page()) {
            $value = $this->page()->url();
        } else if ($this->type() === 'file' && $this->file()) {
            $value = $this->file()->url();
        }

        if (is_string($value) && $this->hash()) {
            $value .= '#' . $this->hash();
        }

        return $value;
    }

    public function href()
    {
        if ($this->type() === 'tel') {
            return 'tel:' . preg_replace('![^0-9\+]+!', '', $this->value());
        } else if ($this->type() === 'email') {
            return 'mailto:' . $this->value();
        } else {
            return $this->url();
        }
    }

    public function attrData($customData = [])
    {
        $data = [
            'href' => $this->href()
        ];

        if ($this->popup() === true) {
            $data['target'] = '_blank';
        }

        return array_merge($data, $customData);
    }

    public function attr($customAttr = [])
    {
        $data = $this->attrData($customAttr);

        $currentRel = $data['rel'] ?? null;
        $currentTarget = $data['target'] ?? null;
        $data['rel'] = Html::rel($currentRel, $currentTarget);

        return Html::attr($data);
    }

    public function tag($attr = [])
    {
        return Html::a($this->href(), $this->title(), $this->attrData($attr));
    }
}

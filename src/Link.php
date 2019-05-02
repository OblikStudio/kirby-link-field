<?php
namespace LinkField;

use Kirby\Toolkit\Str;
use Kirby\Toolkit\Html;

class Link {
  function __construct ($field) {
    $this->$field = $field;
    $this->data = $this->$field->yaml();

    $this->type = $this->data['type'] ?? null;
    $this->value = $this->data['value'] ?? null;
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
        $this->file = kirby()->file($this->value, $this->$field->model());
      }
    }
  }

  function __toString () {
    return $this->href();
  }

  public function url () {
    if ($this->type === 'page') {
      if ($this->page) {
        return $this->page->url();
      }
    } else if ($this->type === 'file') {
      if ($this->file) {
        return $this->file->url();
      }
    }

    if ($this->value) {
      if ($this->type === 'tel') {
        $phone = Str::replace($this->value, [' ', '/', '-', '.'], '');
        return 'tel:' . $phone;
      } else if ($this->type === 'email') {
        return 'mailto:' . $this->value;
      } else {
        return $this->value;
      }
    }

    return '';
  }

  public function href () {
    $value = $this->url();

    if ($this->hash && strpos($value, 'http') === 0) {
      $value .= '#' . $this->hash;
    }

    return $value;
  }

  public function attributes ($attr = []) {
    $attributes = [
      'href' => $this->href()
    ];

    if ($this->popup === true) {
      $attributes['target'] = '_blank';
    }

    return array_merge($attributes, $attr);
  }

  public function attr ($attr = []) {
    return Html::attr($this->attributes($attr));
  }

  public function tag ($attr = []) {
    $href = $this->href();

    if (strpos($href, 'http') === 0) { // https://github.com/getkirby/kirby/issues/1734
      return Html::a($href, $this->text, $this->attributes($attr)); // https://github.com/getkirby/kirby/issues/1733
    } else {
      return '';
    }
  }
}

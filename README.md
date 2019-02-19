# Link field for Kirby 3 (WIP)

This is a link field for Kirby 3. You can conveniently insert external, email or page links.

### Preview

![Preview](https://user-images.githubusercontent.com/7975568/51412878-59978c00-1b6d-11e9-94a0-69790e8f1b84.gif)

### Blueprint
```yaml
fields:
  button:
    label:  Button
    type:   link
```

You can optionally define the possible link types (`url`, `page` and `email`) and their order like that:

```yaml
fields:
  button:
    label:  Button
    type:   link
    options:
      - page
      - url
```

### Content file

An external URL:

```yml
Button: 

link: https://www.medienbaecker.com
type: url
```

A page link:

```yml
Button: 

link: products/lorem-ipsum
type: page

```

An email address:

```yml
Button: 

link: mail@medienbaecker.com
type: email
```

### Template example

There's a convenient `->toHref()` method you can use to automatically return the correct href:

```php
<?= $page->button()->toHref() ?>
```

Email address: `mailto:mail@medienbaecker.com`
Page link: `https://www.example.com/products/lorem-ipsum`

## Installation

Put the `link` folder into your `site/plugins` folder.

# Link field for Kirby 3 (WIP)

This is a link field for Kirby 3. You can conveniently insert external, file links, email addresses, page links or phone numbers.

### Preview

![Preview](https://user-images.githubusercontent.com/7975568/51412878-59978c00-1b6d-11e9-94a0-69790e8f1b84.gif)

### Blueprint
```yaml
fields:
  button:
    label:  Button
    type:   link
```

You can optionally define the possible link types (`url`, `page`, `email`, `file`, `phone`) and their order like that:

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

A file link:

```yml
Button: 

link: your-file.jpeg
type: file

```

An email address:

```yml
Button: 

link: mail@medienbaecker.com
type: email
```

A phone number:

```yml
Button: 

link: 123456
type: phone
```

### Template example

There's a convenient `->toHref()` method you can use to automatically return the correct href:

```php
<?= $page->button()->toHref() ?>
```

Email address: `mailto:mail@medienbaecker.com`
Phone number: `tel:123456`
Page link: `https://www.example.com/products/lorem-ipsum`

## Installation

Put the `link` folder into your `site/plugins` folder.

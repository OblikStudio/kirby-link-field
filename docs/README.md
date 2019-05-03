# kirby-link-field

Kirby 3 Field for links of any kind - external, page, file, email, phone. Has settings for text, popup true/false, and hash.

## Installation

```
composer require medienbaecker/kirby-link-field
```

...or check out [other plugin installation methods](https://getkirby.com/docs/guide/plugins/plugin-setup-basic#the-three-plugin-installation-methods).

## Blueprint

Add a field and set its type to `link`:

```yaml
fields:
  myfield:
    type: link
    label: Link
```

To define what link types you want, use `options`. Possible values are `url`, `page`, `file`, `email`, and `tel`:

```yaml
fields:
  myfield:
    type: link
    label: Link
    options:
      - page
      - url
```

By default, you can also specify link text, popup true/false, and hash. You can disable those options or change their appearance by using the `settings` value:

```yaml
fields:
  myfield:
    type: link
    label: Link
    settings:
      popup:
        width: 1/3
        label: External Link
        help: Open link in a new tab?
      text:
        width: 2/3
      hash: false
```

To disable settings altogether, set:

```yaml
settings: false
```

## Usage

To render the links, use the provided `toLink()` method, which returns an instance of the Link class.

Let's say you have a field with the following values:

```
Myfield: 

type: page
value: home
text: My Text
popup: true
hash: heading-1
```

```php
$link = $page->myfield()->toLink();
```

### `$link->url()`

Returns the link URL without the hash:

```
http://localhost/home
```

### `$link->href()`

Returns the full link href:

```
http://localhost/home#heading-1
```

**Note:** This is automatically called when you try to convert the class to string, meaning that:

```php
echo $page->myfield()->toLink();
```

...is the same as:

```php
echo $page->myfield()->toLink()->href();
```

### `$link->attr()`

Returns the link attributes:

```
href="http://localhost/home#heading-1" target="_blank"
```

### `$link->tag()`

Returns a full `<a>` tag:

```html
<a href="http://localhost/home#heading-1" rel="noopener noreferrer" target="_blank">My Text</a>
```

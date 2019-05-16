# kirby-link-field

Kirby 3 Field for links of any kind - external, page, file, email, phone. Has settings for text, popup true/false, and hash. Original plugin is [this](https://github.com/medienbaecker/kirby-link-field), created by [Thomas Günther](https://github.com/medienbaecker).

## Installation

```
composer require oblik/kirby-link-field
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

To render the links, use the provided `toLink()` method. It returns an instance of the Link class, or `null` if the link is invalid.

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

Returns the link URL, including the hash:

```
http://localhost/home#heading-1
```

**Note:** For `email` and `tel` links, the value is `null` since they're not actual links.

### `$link->href()`

Returns link href:

```
http://localhost/home#heading-1
```

If the link type is `email`, the href has `mailto:`. If it's `tel`, it has `tel:`.

**Note:** This is automatically called when you try to convert the class to string, meaning that:

```php
echo $page->myfield()->toLink();
```

...is the same as:

```php
echo $page->myfield()->toLink()->href();
```

### `$link->attr([$args])`

Returns the link attributes, merged with the optional `$args`:

```
href="http://localhost/home#heading-1" target="_blank"
```

### `$link->tag([$args])`

Returns a full `<a>` tag with merged attributes from the optional `$args`:

```html
<a href="http://localhost/home#heading-1" rel="noopener noreferrer" target="_blank">My Text</a>
```

### `$link->text()`

Returns the link text, if present, or an empty string.

### `$link->parts`

An instance of the `Kirby\Http\Uri` class. It contains the parts of `$link->url()`. You can also use its methods on the Link instance. For example:

```php
echo $link->parts->host();
```

...is the same as:

```php
echo $link->host();
```

## Development

Run `npm i` to install Webpack and all other dev dependencies.

Scripts:

- `npm run dev` - start Webpack in dev mode with watch
- `npm run build` - build the source

**Note:** Since Babel would have been an overkill for such a small project, please write JavaScript in ES5.

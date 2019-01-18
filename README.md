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
```
Button: 

link: https://www.medienbaecker.com
type: url
```

```
Button: 

link: mail@medienbaecker.com
type: email
```

## Installation

Put the `link` folder into your `site/plugins` folder.

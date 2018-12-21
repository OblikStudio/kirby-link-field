# Link field for Kirby 3 (WIP)

This is a link field for Kirby 3. You can conveniently insert external, email or page links.

### Preview

![Preview](https://user-images.githubusercontent.com/7975568/50344886-4a50fe80-052d-11e9-9d04-386498f6e763.gif)

### Blueprint
```yaml
fields:
    link:
        label:  Link
        type:   link
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

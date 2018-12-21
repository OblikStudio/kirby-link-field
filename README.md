# Link field for Kirby 3 (WIP)

This is a link field for Kirby 3. You can conveniently insert external, email or page links.

### Preview

![Preview](https://user-images.githubusercontent.com/7975568/50344611-00b3e400-052c-11e9-9e64-1e60f5a6098f.gif)

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

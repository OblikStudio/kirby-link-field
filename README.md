# Link field for Kirby 3 (WIP)

This is a link field for Kirby 3. You can conveniently insert external, email or page links.

### Blueprint:
```yaml
fields:
    button:
        label:  Button
        type:   link
```

### Content file:
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

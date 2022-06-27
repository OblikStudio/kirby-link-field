# Contributing

Thank you for showing interest in helping out! Please, note that code and pull requests are not the only way you can contribute. You can also:

- Submit bug reports on the [Issues page](https://github.com/OblikStudio/kirby-link-field/issues)
- Clarify things in [the README documentation](https://github.com/OblikStudio/kirby-link-field/blob/master/docs/README.md)
- Support development by [sponsoring us](https://github.com/sponsors/OblikStudio) 💖

## Development

Here's what you need to set up a local development environment.

### Tools

- [Apache](https://httpd.apache.org/download.cgi) 2.4.53
- [PHP](https://www.php.net/downloads.php) 8.1.6
  - [Composer](https://getcomposer.org/download/) 2.3.7
  - [PHPUnit](https://packagist.org/packages/phpunit/phpunit) 9.5.21 (installed globally)
  - [PHP CS Fixer](https://cs.symfony.com/) 3.8.0 (installed globally)
- [Volta](https://volta.sh/) 1.0.4 (optional)
  - [Node](https://nodejs.org/en/download/) 14.17.0
  - [npm](https://www.npmjs.com/) 7.16.0

### Setup

1. Clone the repo `git clone git@github.com:OblikStudio/kirby-link-field.git`
1. Install npm dependencies with `npm i`
1. Install Composer dependencies with `composer install`

### Workflow

#### Test Site

This repo also doubles as a test website for the plugin. Once you run `composer install`, you'll download Kirby. After you've started Apache, you'll be able to open the project in the browser and see a simple webpage. Then, you can navigate to `http://localhost/panel` and test how the link field behaves in the admin interface.

This is done with the help of `index.site.php`. All files related to the test site are excluded from the final package in `.gitattributes`.

#### Code Formatting

I follow PSR for PHP and Prettier defaults for everything else. The only exception is the use of spaces. I like tabs for their accessibility, flexibility, and ease of use. Please, don't switch the project to spaces.

- `npm run fix` runs [Prettier](https://github.com/prettier/prettier) and formats JS/Vue code
- `composer fix` runs [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) and formats PHP code

Additionally, there's a [husky](https://github.com/typicode/husky) pre-commit hook that runs those two tools for you before each commit and prevents you from committing badly formatted code. It should be set up automatically once you install with npm.

#### Testing

You can run PHPUnit with `composer test` to see if there are any failing tests. This is done automatically in the aforementioned pre-commit hook.

---

Thank you! 🙏

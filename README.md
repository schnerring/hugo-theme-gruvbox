# hugo-gruvbox

A retro-looking [Hugo](https://gohugo.io/) theme inspired by [gruvbox](https://github.com/morhetz/gruvbox). The pastel colors are high contrast, easily distinguishable, pleasing to the eye, and feature light and dark color palettes.

## Features

- [Prism](https://prismjs.com/) for code highlighting
- [Tabler Icons](https://tabler-icons.io/) for generic icons
- [Simple Icons](https://simpleicons.org/) for social icons
- All third-party dependencies are managed with [npm](https://www.npmjs.com/) to make updating a breeze and reduce code clutter

Big thanks to the creators of [Hugo](https://gohugo.io/) and the software mentioned above. Also, thanks to everyone participating in open-source. I couldn't have created this theme without you. ❤️

## Installation

Run `npm install` before running `hugo`.

## Configure Prism

The theme allows customization of Prism via `config.toml` parameters:

```toml
[params]
  [params.prism]
    languages = [
      "markup",
      "css",
      "clike",
      "javascript"
    ]
    plugins = [
      "normalize-whitespace",
      "toolbar",
      "copy-to-clipboard"
    ]
    theme = "solarizedlight"
```

In my opinion, this is the coolest feature of the theme. Other Hugo themes usually include a pre-configured version of Prism, which complicates updates and change tracking, and clutters the theme's code base with third-party JavaScript.

### Explore Prism Features

After running `npm install`, explore Prism features like this:

```shell
# Languages
ls node_modules/prismjs/components

# Plugins
ls node_modules/prismjs/plugins

# Themes
ls node_modules/prismjs/themes node_modules/prism-themes/themes
```

## Extensibility

You can extend the theme by overriding the following partials in the `layouts/partials` directory which by default are empty placeholder files:

- `head_start.html`  
  Custom HTML at the start of `<head>`
- `head_end.html`  
  Custom HTML at the end of `<head>`
- `footer_end.html`  
  Custom HTML at the end of `<body>`

## PostCSS

```shell
npm i -g postcss postcss-cli
npm i
```

[See also](https://gohugo.io/hugo-pipes/postcss/):

> Hugo Pipe's PostCSS requires the `postcss-cli` JavaScript package to be installed in the environment (`npm install -g postcss postcss-cli`) along with any PostCSS plugin(s) used (e.g., `npm install -g` autoprefixer).
>
> If you are using the Hugo Snap package, PostCSS and plugin(s) need to be installed locally within your Hugo site directory, e.g., `npm install postcss-cli` without the `-g` flag.

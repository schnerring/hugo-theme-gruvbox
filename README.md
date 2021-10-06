# hugo-gruvbox

A retro-looking [Hugo](https://gohugo.io/) theme inspired by [gruvbox](https://github.com/morhetz/gruvbox).
The pastel colors are high contrast, easily distinguishable, pleasing to the
eye, and feature light and dark color palettes.

## DISCLAIMER: Project Status

This theme is still under heavy development and not production ready.
[Check out the issues](https://github.com/schnerring/hugo-gruvbox/issues) to see
what features are missing. As soon as the core features are implemented, I will
publish it to the [Hugo showcase](https://themes.gohugo.io/) and release
version v0.1.0.

## Getting Started

Create a new Hugo website:

```shell
hugo new site example.com
cd example.com/
```

Initialize the site as Hugo module

```shell
hugo mod init example.com
```

Add the following to the `config.toml` file:

```toml
[markup]
  # (Optional) To be able to use all Prism plugins, the theme enables unsafe
  # rendering by default
  #_merge = "deep"

[build]
  # The theme enables writeStats which is required for PurgeCSS
  _merge = "deep"

# This hopefully will be simpler in the future.
# See: https://github.com/schnerring/hugo-gruvbox/issues/16
[module]
  [[module.imports]]
    path = "github.com/schnerring/hugo-gruvbox"
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "layouts"
    target = "layouts"
  [[module.mounts]]
    source = "static"
    target = "static"
  [[module.mounts]]
    source = "node_modules/prismjs"
    target = "assets/prismjs"
  [[module.mounts]]
    source = "node_modules/prism-themes/themes"
    target = "assets/prism-themes"
  [[module.mounts]]
    source = "node_modules/typeface-fira-code/files"
    target = "static/fonts"
  [[module.mounts]]
    source = "node_modules/typeface-roboto-slab/files"
    target = "static/fonts"
  [[module.mounts]]
    source = "node_modules/@tabler/icons/icons"
    target = "assets/tabler-icons"
  [[module.mounts]]
    source = "node_modules/simple-icons/icons"
    target = "assets/simple-icons"
```

Install the theme:

```shell
hugo mod get
```

Initialize the NPM `package.json` and install the dependencies:

```shell
hugo mod npm pack
npm install
```

Run Hugo:

```shell
hugo server
```

## Features

- Code highlighting with [Prism](https://prismjs.com/)
- [Tabler Icons](https://tabler-icons.io/) for generic icons
- [Simple Icons](https://simpleicons.org/) for social icons
- All third-party dependencies are managed with [npm](https://www.npmjs.com/)
  to make updating a breeze and reduce code clutter
- Dark mode that also changes Prism themes

Big thanks to the creators of [Hugo](https://gohugo.io/) and the software
mentioned above. Also, thanks to everyone participating in open-source. I
couldn't have created this theme without you. ❤️

## Configuration

### Colors

Two options are available to configure the theme colors:

- `defaultTheme`: `dark` or `light` (defaults to `light`)  
  Default theme color for when a user visits the site for the first time.
- `defaultColor`: `gray`, `red`, `green`, `yellow`, `blue`, `purple`, `aqua`, or
  `orange` (defaults to `blue`)  
  Theme color for things such as links, headings etc.
- `themeContrast`: `soft`, `medium`, or `hard` (defaults to `medium`)  
  Theme background color

### Prism

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
```

In my opinion, this is the coolest feature of the theme. Other Hugo themes
usually include a pre-configured version of Prism, which complicates updates and
change tracking, and clutters the theme's code base with third-party JavaScript.

The Prism theme is not configurable because of the integration with the dark
mode functionality. Toggling between color modes swaps the Prism theme between
[`gruvbox-dark`](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-gruvbox-dark.css)
and [`gruvbox-light`](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-gruvbox-light.css)
from [github.com/PrismJS/prism-themes](https://github.com/PrismJS/prism-themes).

#### Explore Prism Features

After running `npm install`, explore Prism features like this:

```shell
# Languages
ls node_modules/prismjs/components

# Plugins
ls node_modules/prismjs/plugins
```

## Extensibility

You can extend the theme by overriding the following partials in the `layouts/partials`
directory which by default are empty placeholder files:

- [`head/head_start.html`](./layouts/partials/head_start.html)  
  Custom HTML at the start of `<head>`
- [`head/head_end.html`](./layouts/partials/head_end.html)  
  Custom HTML at the end of `<head>`
- [`footer_end.html`](./layouts/partials/footer_end.html)  
  Custom HTML at the end of `<body>`
- [`comments.html`](./layouts/partials/comments.html)  
  Comments at the end of posts

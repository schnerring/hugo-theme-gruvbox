# hugo-theme-gruvbox

A retro-looking [Hugo](https://gohugo.io/) theme inspired by [gruvbox](https://github.com/morhetz/gruvbox)
to build secure, fast and SEO-ready websites.

This theme is easily customizable with features that any coder loves.

Lots of inspiration was taken from the [Hello Friend](https://github.com/panr/hugo-theme-hello-friend)
and [Doks](https://github.com/h-enk/doks) Hugo themes.

## DEMO [https://hugo-theme-gruvbox.pages.dev/](https://hugo-theme-gruvbox.pages.dev/)

## DISCLAIMER: Project Status

This theme is still under heavy development and not production ready.
[Check out the issues](https://github.com/schnerring/hugo-theme-gruvbox/issues)
to see what features are missing. As soon as the core features are implemented,
I will publish it to the [Hugo showcase](https://themes.gohugo.io/) and release
version v0.1.0.

## Highlights

- [Code highlighting with Prism](#Prism)
- Full-text search with [Flex Search](https://github.com/nextapps-de/flexsearch)
- Display your CV using structured [JSON Resume](https://jsonresume.org/) data
- Integrated image optimization
- Dark mode that also changes Prism themes
- [Dynamic color choices from the Gruvbox color palette](#colors)
- [Extensible to make it suit your needs](#extensibility)
- Responsive, mobile-first design
- Beautiful SVG icons with [Tabler Icons](https://tabler-icons.io/)

A big thank you to the authors of the software that make this theme possible! ❤️

## Quickstart

1. `git clone` the repository and `cd` into it
2. Run `npm install` to install the dependencies
3. Run `hugo server`

## Install The Theme

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
# See: https://github.com/schnerring/hugo-theme-gruvbox/issues/16
[module]
  [[module.imports]]
    path = "github.com/schnerring/hugo-theme-gruvbox"
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

## Configuration

### Colors

Two options are available to configure the theme colors:

- `defaultTheme`: `dark` or `light` (defaults to `light`)  
  Default theme color for when a user visits the site for the first time.
- `themeColor`: `gray`, `red`, `green`, `yellow`, `blue`, `purple`, `aqua`, or
  `orange` (defaults to `blue`)  
  Theme color for things such as links, headings etc.
- `themeContrast`: `soft`, `medium`, or `hard` (defaults to `medium`)  
  Theme background color

### Prism

The theme allows customization of [Prism](https://prismjs.com/) via
`config.toml` parameters:

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

Check out the [Prism showcase on the Demo site for examples](https://hugo-theme-gruvbox.pages.dev/blog/prism-code-highlighting-showcase/)

#### Explore Prism Features

After running `npm install`, explore Prism features like this:

```shell
# Languages
ls node_modules/prismjs/components

# Plugins
ls node_modules/prismjs/plugins
```

## Blog Cover

Configure the cover of a blog post in the front matter. The cover must be part
of the [page bundle](https://gohugo.io/content-management/page-bundles/)
due to image processing.

```markdown
---
cover:
  src: my-blog-cover.jpg
  alt: A beautiful image containing interesting things
  caption: Source: my imagination
---
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

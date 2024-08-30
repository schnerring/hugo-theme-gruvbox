---
title: "Image Optimization"
date: "2021-10-16T23:51:37+02:00"
comments: false
socialShare: true
toc: true
cover:
  src: ./alexandre-van-thuan-mr9FouttLGY-unsplash.jpg
  alt:
    The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from
    1928. The architecture is a transition between neoclassicism and
    functionalism.
  caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY)
---

The theme optimizes images by default with a custom
[Hugo's markdown render hook](https://gohugo.io/getting-started/configuration-markup#markdown-render-hooks):

- The theme creates resized versions for each image, ranging from 100 to 700
  pixels wide.
- It generates [WebP](https://en.wikipedia.org/wiki/WebP) versions for each size
  if the original image format isn't WebP.
- The theme keeps the original file format as a fallback for browsers that
  [don't support the WebP format](https://caniuse.com/webp).
- Images in SVG format are embedded as-is.

## Blog Post Cover Images

Use the [front matter](https://gohugo.io/content-management/front-matter/) of
your posts to add cover images:

<!-- markdownlint-disable MD013 -->

```markdown
---
cover:
  src: alexandre-van-thuan-mr9FouttLGY-unsplash.jpg
  alt:
    The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from
    1928. The architecture is a transition between neoclassicism and
    functionalism.
  caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY)
---
```

<!-- markdownlint-enable MD013 -->

## Captions

Add captions to your inline images like this:

```markdown
---
![Alt text](image-url.jpg "Caption with **markdown support**")
---
```

![The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It's pretty from the outside but stunning from the inside.](aaron-thomas-dMqlE7lgyOU-unsplash.jpg "The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It's pretty from the outside but stunning from the inside. By [Aaron Thomas](https://unsplash.com/photos/dMqlE7lgyOU)")

## JPEG and WebP Quality

The default quality is 75%. See the
[official Image Processing Config Hugo docs](https://gohugo.io/content-management/image-processing/#image-processing-config).
Change it by adding the following to the `hugo.toml` file:

```toml
[imaging]
  quality = 75
```

## Resizing

By default, the theme creates resized versions of images ranging from 300 to 700
pixels wide in increments of 100 pixels. Override the resize behavior by adding
the following to the `hugo.toml` file:

```toml
[params]
  [params.imageResize]
    min = 300
    max = 700
    increment = 100
```

## Lazy Loading

Images are lazily loaded by default using the `loading="lazy"` attribute on HTML
`img` tags.

{{< video src="lazy-loading" autoplay="true" controls="false" loop="true" >}}

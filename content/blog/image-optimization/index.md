---
title: "Image Optimization"
date: "2021-10-16T23:51:37+02:00"
comments: false
toc: false
cover:
  src: ./alexandre-van-thuan-mr9FouttLGY-unsplash.jpg
  alt: The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from 1928. The architecture is a transition between neoclassicism and functionalism.
  caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY)
---

The theme optimizes images by default with a custom [Hugo's markdown render hook](https://gohugo.io/getting-started/configuration-markup#markdown-render-hooks):

- The theme creates resized versions for each image, ranging from 100 to 700
  pixels wide
- It generates [WebP](https://en.wikipedia.org/wiki/WebP) versions for each size
  if the original image format isn't WebP
- The theme keeps the original file format as a fallback for browsers that
  [don't support the WebP format](https://caniuse.com/webp)
- Images in SVG format are embedded as is

## Blog Post Cover Images

Use the [front matter](https://gohugo.io/content-management/front-matter/) of
your posts to add cover images:

```markdown
---
cover:
  src: alexandre-van-thuan-mr9FouttLGY-unsplash.jpg
  <!-- markdownlint-disable MD013 -->
  alt: The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from 1928. The architecture is a transition between neoclassicism and functionalism.
  <!-- markdownlint-enable MD013 -->
  caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY)
---
```

## Captions

Add captions to your inline images like this:

```markdown
---
![Alt text](image-url.jpg "Caption with **markdown support**")
---
```

![The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It's pretty from the outside but stunning from the inside.](aaron-thomas-dMqlE7lgyOU-unsplash.jpg "The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It's pretty from the outside but stunning from the inside. By [Aaron Thomas](https://unsplash.com/photos/dMqlE7lgyOU)")

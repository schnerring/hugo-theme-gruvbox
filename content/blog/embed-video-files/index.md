---
title: "Embed Video Files"
date: "2022-04-26T01:16:18+02:00"
draft: false
comments: false
socialShare: true
toc: false
---

Use the [video shortcode](https://github.com/schnerring/hugo-theme-gruvbox/blob/main/layouts/shortcodes/video.html)
to embed your video files from [Hugo Page Resources](https://gohugo.io/content-management/page-resources/).

{{< video src="my-video" autoplay="true" controls="false" loop="true" >}}

<!--more-->

With a page bundle looking like the following:

```text
embed-videos/
|-- index.md
|-- my-video.jpg
|-- my-video.mp4
|-- my-video.webm
```

You can embed `my-video` like this:

```markdown
{{</* video src="my-video" autoplay="true" controls="false" loop="true" */>}}
```

The shortcode looks for media files matching the filename `my-video*`. For each
`video` MIME type file, a `<source>` element is added. The first `image` MIME
type file is used as `poster` (thumbnail). It will render the following HTML:

```html
<video
  autoplay
  loop
  poster="/blog/embed-videos/my-video.jpg"
  width="100%"
  playsinline
>
  <source src="/blog/embed-videos/my-video.mp4" type="video/mp4" />
  <source src="/blog/embed-videos/my-video.webm" type="video/webm" />
</video>
```

You can set a Markdown `caption`, wrapping the `<video>` inside a `<figure`>.

Additionally, the shortcode allows you to set the following attributes:

| Attribute   | Default |
| ----------- | ------- |
| autoplay    | `false` |
| controls    | `true`  |
| height      |         |
| loop        | `false` |
| muted       | `true`  |
| preload     |         |
| width       | `100%`  |
| playsinline | `true`  |

[Learn more about the `<video>` attributes here.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes)

+++
title = "Hugo Static page setup"
date = "2022-12-14T21:18:20-08:00"
draft = false
comments = true
socialShare = true
tag = [
  "firebase",
  "hugo",
  "github"
]
+++

1. Clone a Hugo web page from github

2. Follow setup guide in: [hosting on Firebase](https://gohugo.io/hosting-and-deployment/hosting-on-firebase/#initial-setup)

- `npm install -g firebase-tools`
- `firebase login`
- `firebase init` (i need to use `firebase init hosting` to bypass the error.)

3. Follow the Hugo started guide to modify the page: [quick start](https://gohugo.io/getting-started/quick-start/#add-content)

4. Deploy

- `hugo && firebase deploy`

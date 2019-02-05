# Stack

- nextjs
- styled components
- github pages
- cloudflare

# To do

- [x] [Video player](https://github.com/xDae/react-plyr)
- [x] Get the fonts
- [ ] Change headers static files
- [x] comprehensive web fonts
- [x] polished from normalize
- [ ] Theme, css variables? currentColor?
- [ ] Intl (~~Facebook stuff?~~ No ready), i18next has no support for SSR, ReactIntl for the win (tricky to implement and [might be buggy](https://github.com/zeit/next.js/tree/canary/examples/with-react-intl))
- [ ] Add alt text for all the pictures
- [x] Fix deploy script

If Cloudflare:

```sh
next build && next export && touch out/.nojekyll && touch out/CNAME && echo \"example.com\" >> out/CNAME    && push-dir --dir=out --branch=master
```

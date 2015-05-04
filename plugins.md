---
layout: page
title: "Plugins"
permalink: /plugins/
---

### CSS plugins

* [symdiff-css](https://npmjs.org/package/symdiff-css)
* [symdiff-sass](https://npmjs.org/package/symdiff-sass)

### Template plugins

* [symdiff-html](https://npmjs.org/package/symdiff-html)
* [symdiff-jade](https://npmjs.org/package/symdiff-jade)
* [symdiff-handlebars](https://npmjs.org/package/symdiff-handlebars)

### Where the fuck is…

* [LESS](http://lesscss.org/)? The API of LESS is async and thus cannot be used from the synchronous symdiff API. Please compile it to CSS first and use symdiff-css.
* [Stylus](https://learnboost.github.io/stylus/)? See LESS.
* [JSX](https://facebook.github.io/react/html-jsx.html)? Planned.
* [Mustache](https://github.com/janl/mustache.js)? Planned, but there’s a decent chance that symdiff-handlebars already works.
* the thing only you are using? Consider [writing a plugin](/write-a-plugin/).
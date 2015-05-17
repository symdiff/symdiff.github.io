---
layout: page
title: "Plugins"
permalink: /plugins/
---

### CSS plugins

* [symdiff-css](https://npmjs.org/package/symdiff-css)
* [symdiff-less](https://npmjs.org/package/symdiff-less)
* [symdiff-sass](https://npmjs.org/package/symdiff-sass)

### Template plugins

* [symdiff-html](https://npmjs.org/package/symdiff-html)
* [symdiff-jade](https://npmjs.org/package/symdiff-jade)
* [symdiff-handlebars](https://npmjs.org/package/symdiff-handlebars)
* [symdiff-jsx](https://npmjs.org/package/symdiff-jsx)

### Where the fuck is…

* [Stylus](https://learnboost.github.io/stylus/)? The API of Stylus is async and thus cannot be used from the synchronous symdiff API. Please compile it to CSS first and use symdiff-css or find me a Stylus parser.
* [Mustache](https://github.com/janl/mustache.js)? Planned, but there’s a decent chance that symdiff-handlebars already works for you (it removes all curly brackets expressions and runs the result through symdiff-html).
* [PostCSS](https://github.com/postcss/postcss)? There is no one parser for it because PostCSS doesn’t have a defined syntax (unlike, say, LESS) but instead relies on plugins to transform the AST into proper CSS. The easiest solution for everyone here is to process PostCSS into valid CSS and use symdiff-css.

And the thing only you are using? Consider [writing a plugin](/write-a-plugin/) or at least open an issue on [Github](https://github.com/symdiff/symdiff).
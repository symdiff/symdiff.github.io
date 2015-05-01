---
layout: index
title: "symdiff"
permalink: /
---

<div class="logo">
    <img src="/img/logo.png" alt="logo" />
</div>

# symdiff

Ever wondered if a bunch of style definitions in your project can be safely deleted? symdiff helps you with the decision in that it reports the symmetric difference (hence the name) of your classes used in CSS and in templates.

### Example

~~~ css
/* css */
.home {
    color: red;
}
.wrapper {
    max-width: 760px;
}
~~~

~~~ html
<!-- html -->
<body>
    <div class="wrapper">
        YO
    </div>
</body>
~~~

    ==> Unused CSS classes: home

### Usage

The recommended way of use is to integrate it in your build tool of choice and let the build fail when the two sets of CSS and template classes are not equal. 

* [Gulp integration](/gulp-integration/)

### Available plugins

Choose one of these:

* [symdiff-css](https://npmjs.org/package/symdiff-css)
* [symdiff-sass](https://npmjs.org/package/symdiff-sass)
* [symdiff-less](https://npmjs.org/package/symdiff-less)
* [symdiff-stylus](https://npmjs.org/package/symdiff-stylus)
* [symdiff-html](https://npmjs.org/package/symdiff-html)
* [symdiff-jade](https://npmjs.org/package/symdiff-jade)
* [symdiff-handlebars](https://npmjs.org/package/symdiff-handlebars)

…or write your own [plugin](/plugins/).
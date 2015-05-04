---
layout: index
title: "symdiff"
permalink: /
---

# symdiff

Ever wondered if a bunch of style definitions in your project can be safely deleted? symdiff helps you with this decision: It reports the [symmetric difference](http://en.wikipedia.org/wiki/Symmetric_difference) (hence the name) of your classes used in CSS and in templates.

### Example

~~~ css
/* css */
.home {
    color: red;
}
.row {
    max-width: 760px;
}
~~~

~~~ html
<!-- html -->
<body>
    <div class="home">
        YO
    </div>
</body>
~~~

![Gulp](/img/gulp.png)

### Usage

The recommended way of use is to integrate it in your build tool of choice and let the build fail when the two sets of CSS and template classes are not equal. (See above.)

* [Gulp integration](/gulp-integration/)

### Available plugins

See [plugins](/plugins/) or [write your own](/write-a-plugin/).
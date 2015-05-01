---
layout: page
title: "Gulp integration"
permalink: /gulp-integration/
---

First install the plugin itself:

~~~
npm install gulp-symdiff
~~~

Then install all the plugins you need. TODO LINK

### Usage

~~~ js
var symdiff = require('gulp-symdiff'),
    html = require('symdiff-html'),
    css = require('symdiff-css');

gulp
    .src(['src/*.css', 'src/*.html'])  // ALL the files
    .pipe(symdiff({
        templates: [html],  // list all templates plugins
        css: [css]          // list all css plugins
    })
    .on('error', function() {
        process.exit(1);    // break the build
    }));
~~~
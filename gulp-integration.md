---
layout: page
title: "Gulp integration"
permalink: /gulp-integration/
---

First install the plugin itself:

    npm install gulp-symdiff

Then install all the [plugins](/plugins/) you need.

### Usage

{% highlight javascript %}
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
{% endhighlight %}

### FAQ

Q: *How does gulp-symdiff decide whether it should run a file through the HTML plugin or the CSS plugin to extract the classes?*

A: It doesn’t. Every file is piped through every plugin. Since a plugin should never throw an error (e.g. when you pass HTML to the CSS plugin), this will work.

Q: *But won’t this lead to false positives, e.g. when using `.whatever` somewhere in the HTML?*

A: Potentially it could, yes, but I suspect in reality it won’t because plugins should not use RegExps but parsers.
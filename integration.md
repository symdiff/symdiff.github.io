---
layout: page
title: "Integration"
permalink: /integration/
---

Jump to:

* [Gulp](#gulp)
* [Grunt](#grunt)
* [Where the fuck is…](#where-the-fuck-is)
* [FAQ](#faq)

## Gulp

![gulp-symdiff](/img/gulp-symdiff.png)

### Installation

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
        css: [css],          // list all css plugins
        ignore: [/^ignore/]  // classes to ignore
    })
    .on('error', function() {
        process.exit(1);    // break the build
    }));
{% endhighlight %}

### Example

Look [here](https://github.com/symdiff/gulp-symdiff/blob/master/Gulpfile.js).

## Grunt

![grunt-symdiff](/img/grunt-symdiff.png)

### Installation

First install the plugin itself:

    npm install grunt-symdiff

Then install all the [plugins](/plugins/) you need.

### Usage

{% highlight javascript %}
var symdiffCSS = require('symdiff-css'),
    symdiffHTML = require('symdiff-html');

grunt.initConfig({
    symdiff: {
        foo: {
            src: 'test/fixtures/bad.*' // however you specify source files in Grunt
        },
        options: {
            css: [symdiffCSS],  // all css plugins
            templates: [symdiffHTML],   // all template plugins
            ignore: [/regex/, 'string'] // classes to ignore
        }
    }
});
grunt.loadNpmTasks('grunt-symdiff');
{% endhighlight %}

### Example

Look [here](https://github.com/symdiff/grunt-symdiff/blob/master/Gruntfile.js).

## Where the fuck is…

* [Broccoli](https://github.com/broccolijs/broccoli)? Planned long term, if you're impatient please consider writing a plugin.
* [Webpack](https://webpack.github.io/)? Planned, but I didn't check whether it's actually possible and the right thing to do with webpack. Also: Hints and tips on how to test a webpack loader are greatly appreciated.

## FAQ

Q: *How does symdiff decide whether it should run a file through the HTML plugin or the CSS plugin to extract the classes?*

A: It doesn’t. Every file is piped through every plugin. Since a plugin should never throw an error (e.g. when you pass HTML to the CSS plugin), this will work.

Q: *But won’t this lead to false positives, e.g. when using `.whatever` somewhere in the HTML?*

A: Potentially it could, yes, but I suspect in reality it won’t because plugins should not use RegExps but parsers.
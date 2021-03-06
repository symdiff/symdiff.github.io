---
layout: page
title: "Write a plugin"
permalink: /write-a-plugin/
---

symdiff plugins are pure functions that transform a string into an array of strings. The input is the file content, the output the classes used in the file.

### Example

Take for instance CSS, you could do it like this naively:

{% highlight javascript %}
module.exports = 
    function symdiffCSS(cssString) {
        return cssString
                // take everything of the form .abcd
                .match(/\.[a-zA-Z][a-z-A-Z0-9\-_]*/gi)
                // remove leading dot
                .map(function(clazz) {
                    return clazz.substring(1);
                });
    }
{% endhighlight %}

…but please don’t and use a [parser](https://www.npmjs.com/search?q=parser) instead.

### Error Handling

With a symdiff plugin there are no errors, semantically. Either it detects classes in a string or it doesn’t and it the latter case it should just return an empty array. (Even if the file is syntactically invalid.) Never should a plugin `throw`.

### Warnings

Put them in an array and attach it to the `warnings` property of the array you return like this:

{% highlight javascript %}
module.exports = 
    function symdiffHTML(htmlString) {
        var classes = [],
            warnings = [];

        // business logic here
        warnings.push("ng-class not supported yet!");
        // more business logic

        classes.warnings = warnings;
        return classes;
    }
{% endhighlight %}

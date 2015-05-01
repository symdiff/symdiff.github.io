---
layout: page
title: "Plugins"
permalink: /plugins/
---

symdiff plugins are pure functions that transform a string into an array of strings. The input is the file content, the output the classes used in the file.

### Example

Take for instance CSS, you could do it like this naively:

~~~ js
function symdiffCSS(cssString) {
    return cssString
            // take everything of the form .abcd
            .match(/\.[a-zA-Z][a-z-A-Z0-9\-_]*/gi)
            // remove leading dot
            .map(function(clazz) {
                return clazz.substring(1);
            });
}
~~~
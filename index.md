---
layout: index
title: "symdiff"
permalink: /
---

# symdiff

Ever wondered if a bunch of style definitions in your project can be safely deleted? symdiff helps you with this decision: It reports the [symmetric difference](http://en.wikipedia.org/wiki/Symmetric_difference) (hence the name) of your classes used in CSS and in templates.

### Example

This CSS:

{% highlight css %}
/* css */
.container {
    padding: 0;
}
{% endhighlight %}

Together with this HTML:

{% highlight html %}
<!-- html -->
<body>
    <div class="row column">
        YO
    </div>
</body>
{% endhighlight %}

Results in this:

![Gulp](/img/grunt-symdiff.png)

### Usage

The recommended way of use is to [integrate](/integration/) it in your build tool of choice and let the build fail when the two sets of CSS and template classes are not equal. (See above.)

But if you have a different use case you can use symdiff also directly. It takes three arrays of strings as arguments:

1. the classes used in CSS
2. the classes used in templates
3. classes to ignore

It outputs an object with the fields `css` and `templates`. For instance:

{% highlight js %}
var symdiff = require('symdiff');

var diff = symdiff(yourCssClasses, yourTemplateClasses, classesYouDoNotCareAbout);

console.log(diff);
// yields
{
    css: unusedCssClasses,
    templates: unusedTemplateClasses
}
{% endhighlight %}

If you're unsure you can also take a look at the various tests on [Github](https://github.com/symdiff).

### Available plugins

See [plugins](/plugins/) or [write your own](/write-a-plugin/).
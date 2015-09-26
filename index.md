---
layout: index
title: "symdiff"
permalink: /
---

# symdiff

Ever wondered if some of your classes can be removed without breaking things? symdiff gives you the answer: It returns the [symmetric difference](http://en.wikipedia.org/wiki/Symmetric_difference) (hence the name) of classes used in your styles and templates. This means a class must be in both of them or it will break your build (if you want to).

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
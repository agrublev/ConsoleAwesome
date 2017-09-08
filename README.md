Console Awesome 
=====
*The modern Javascript Console*
***
- light-weight library
- has NO DEPENDENCIES :)
- will make your console 10 times prettier than ever!

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://forthebadge.com)

Usages
-----

The console log replacement:

```$xslt
ca.l("some text",{object:"sure"},21313,"cool");
```
Works same as the console would, just less typing and comes out much prettier.
![ca.l](demo/images/simpleLog.png?raw=true "Simple log")

What if it's very important stuff?
```$xslt
ca.l("normal");
ca.s(); // awesome spacer!
ca.l("!more important");
ca.s(); // awesome spacer!
ca.l("!!very important");
ca.s(); // awesome spacer!
ca.l("!!!extremely important");
```
![ca.l](demo/images/importantLogs.png?raw=true "Important logs")

Notice for more important logs we even add  a line tracer!
![ca.l](demo/images/lineTrace.png?raw=true "Line Trace")

But what if you want to display a grouped number of consoles?

```$xslt
ca.g("My Group",'test',{obj:"sad"},2); // nicely grouped
ca.s(10);
ca.g("~My Group",'test',{obj:"sad"},2); // collapsed to save space
```
![ca.l](demo/images/grouped.png?raw=true "Line Trace")

As you can see it's highly beneficial to collapse a number of large variables (like a database ajax response) and only expand when needed.

The first string "My Group" is the title of the group. Adding ~ before the title indicates we want to collapse it.

And also notice the .s (spacer) can be passed a value allowing you to add more or less spacing between items.



Contributing
-----

Interested in contributing features and fixes?

[Read more on contributing](./CONTRIBUTING.md).

Changelog
-----

See the [Changelog](https://github.com/agrublev/ConsoleAwesome)

License
-----

Copyright (c) 2017 Angel Grablev, https://freedcamp.com
Licensed under the [MIT license](http://opensource.org/licenses/MIT).

# node.extend <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A port of jQuery.extend that **actually works** on node.js


## Description

None of the existing ones on npm really work therefore I ported it myself.



## Usage

To install this module in your current working directory (which should already contain a package.json), run

```
npm install node.extend
```

You can additionally just list the module in your [package.json](https://npmjs.org/doc/json.html) and run npm install.

Then, require this package where you need it:

```
var extend = require('node.extend');
```

The syntax for merging two objects is as follows:

```
var destObject = extend({}, sourceObject);
// Where sourceObject is the object whose properties will be copied into another.
// NOTE: In this situation, this is not a deep merge. See below on how to handle a deep merge.
```

For information about how the clone works internally, view source in lib/extend.js or checkout the doc from [jQuery][]

### A Note About Deep Merge (avoiding pass-by-reference cloning)

In order to force a deep merge, when extending an object, you must pass boolean true as the first argument to extend:

```
var destObject = extend(true, {}, sourceObject);
// Where sourceObject is the object whose properties will be copied into another.
```

See [this article](http://www.jon-carlos.com/2013/is-javascript-call-by-value-or-call-by-reference/) for more information about the need for deep merges in JavaScript.

## Credit

- Jordan Harband [@ljharb][]



## License

Copyright 2011, John Resig
Dual licensed under the MIT or GPL Version 2 licenses.
http://jquery.org/license

[package-url]: https://npmjs.org/package/node.extend
[npm-version-svg]: https://versionbadg.es/dreamerslab/node.extend.svg
[npm-badge-png]: https://nodei.co/npm/node.extend.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/node.extend.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/node.extend.svg
[downloads-url]: https://npm-stat.com/charts.html?package=node.extend
[codecov-image]: https://codecov.io/gh/dreamerslab/node.extend/branch/master/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/dreamerslab/node.extend/
[actions-image]: https://img.shields.io/github/check-runs/dreamerslab/node.extend/master
[actions-url]: https://github.com/dreamerslab/node.extend/actions
[jQuery]: http://api.jquery.com/jQuery.extend/
[@ljharb]: https://twitter.com/ljharb


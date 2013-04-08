var tests = require( './extend' );
var keys = require('object-keys');

var testKeys = keys(tests);
for (var i = 0; i < testKeys.length; ++i) {
  tests[i]();
}

console.log( 'All tests passed :)' );

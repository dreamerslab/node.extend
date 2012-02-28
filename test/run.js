var tests = require( './extend' );

Object.keys( tests ).forEach( function( test ){
  tests[ test ]();
});

console.log( 'All tests passed :)' );
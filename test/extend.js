var extend = require( '../lib/extend' );
var should = require( 'should' );

var str  = 'me a test';
var int  = 10;
var arr  = [ 1, 'what', new Date( 81, 8, 4 )];
var date = new Date( 81, 4, 13 );

var obj = {
  str : str,
  int : int,
  arr : arr,
  date : date
};

var deep = {
  ori : obj,
  layer : {
    int : 10,
    str : 'str',
    date : new Date( 84, 5, 12 ),
    arr : [ 101, 'dude', new Date( 82, 10, 4 )],
    deep : {
      str : obj.str,
      int : int,
      arr : obj.arr,
      date : new Date( 81, 7, 4 )
    }
  }
};


module.exports = {

  'test .version' : function (){
    extend.version.should.match( /^\d+\.\d+\.\d+$/ );

    console.log( 'version test passed' );
  },

  'merge string with string' : function (){
    var ori    = 'what u gonna say';
    var target = extend( ori, str );

    ori.should.eql( 'what u gonna say' );
    str.should.eql( 'me a test' );
    target.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't'
    });
    console.log( 'merge string with string test passed' );
  },

  'merge string with number' : function (){
    var ori    = 'what u gonna say';
    var target = extend( ori, int );

    ori.should.eql( 'what u gonna say' );
    int.should.eql( 10 );
    target.should.eql({});
    console.log( 'merge string with number test passed' );
  },

  'merge string with array' : function (){
    var ori    = 'what u gonna say';
    var target = extend( ori, arr );

    ori.should.eql( 'what u gonna say' );
    arr.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    target.should.eql({
      '0' : 1,
      '1' : 'what',
      '2' : new Date( 81, 8, 4 )
    });
    console.log( 'merge string with array test passed' );
  },

  'merge string with date' : function (){
    var ori    = 'what u gonna say';
    var target = extend( ori, date );

    ori.should.eql( 'what u gonna say' );
    date.should.eql( new Date( 81, 4, 13 ));
    target.should.eql( new Date( 81, 4, 13 ));
    console.log( 'merge string with date test passed' );
  },

  'merge string with obj' : function (){
    var ori    = 'what u gonna say';
    var target = extend( ori, obj );

    ori.should.eql( 'what u gonna say' );
    obj.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    target.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    console.log( 'merge string with object test passed' );
  },

  'merge number with string' : function (){
    var ori    = 20;
    var target = extend( ori, str );

    ori.should.eql( 20 );
    str.should.eql( 'me a test' );
    target.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't'
    });
    console.log( 'merge number with string test passed' );
  },

  'merge number with number' : function (){
    var ori    = 20;
    var target = extend( ori, int );

    ori.should.eql( 20 );
    int.should.eql( 10 );
    target.should.eql({});
    console.log( 'merge number with number test passed' );
  },

  'merge number with array' : function (){
    var ori    = 20;
    var target = extend( ori, arr );

    ori.should.eql( 20 );
    arr.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    target.should.eql({
      '0' : 1,
      '1' : 'what',
      '2' : new Date( 81, 8, 4 )
    });
    console.log( 'merge number with array test passed' );
  },

  'merge number with date' : function (){
    var ori    = 20;
    var target = extend( ori, date );

    ori.should.eql( 20 );
    date.should.eql( new Date( 81, 4, 13 ));
    target.should.eql( new Date( 81, 4, 13 ));
    console.log( 'merge number with date test passed' );
  },

  'merge number with object' : function (){
    var ori    = 20;
    var target = extend( ori, obj );

    ori.should.eql( 20 );
    obj.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    target.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    console.log( 'merge number with object test passed' );
  },

  'merge array with string' : function (){
    var ori    = [ 1, 2, 3, 4, 5, 6 ];
    var target = extend( ori, str );

    ori.should.eql([ 'm', 'e', ' ', 'a', ' ', 't', 'e', 's', 't' ]);
    str.should.eql( 'me a test' );
    target.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't'
    });
    console.log( 'merge array with string test passed' );
  },

  'merge array with number' : function (){
    var ori    = [ 1, 2, 3, 4, 5, 6 ];
    var target = extend( ori, int );

    ori.should.eql([ 1, 2, 3, 4, 5, 6 ]);
    int.should.eql( 10 );
    target.should.eql([ 1, 2, 3, 4, 5, 6 ]);
    console.log( 'merge array with number test passed' );
  },

  'merge array with array' : function (){
    var ori    = [ 1, 2, 3, 4, 5, 6 ];
    var target = extend( ori, arr );

    ori.should.eql([ 1, 'what', new Date( 81, 8, 4 ), 4, 5, 6 ]);
    arr.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    target.should.eql([ 1, 'what', new Date( 81, 8, 4 ), 4, 5, 6 ]);
    console.log( 'merge array with array test passed' );
  },

  'merge array with date' : function (){
    var ori    = [ 1, 2, 3, 4, 5, 6 ];
    var target = extend( ori, date );

    ori.should.eql([ 1, 2, 3, 4, 5, 6 ]);
    date.should.eql( new Date( 81, 4, 13 ));
    target.should.eql([ 1, 2, 3, 4, 5, 6 ]);
    console.log( 'merge array with date test passed' );
  },

  'merge array with object' : function (){
    var ori    = [ 1, 2, 3, 4, 5, 6 ];
    var target = extend( ori, obj );

    ori.length.should.equal( 6 );
    ori[ 'str' ].should.eql( 'me a test' );
    ori[ 'int' ].should.eql( 10 );
    ori[ 'arr' ].should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    ori[ 'date' ].should.eql( new Date( 81, 4, 13 ));
    obj.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    target.length.should.equal( 6 );
    target[ 'str' ].should.eql( 'me a test' );
    target[ 'int' ].should.eql( 10 );
    target[ 'arr' ].should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    target[ 'date' ].should.eql( new Date( 81, 4, 13 ));
    console.log( 'merge array with object test passed' );
  },

  'merge date with string' : function (){
    var ori    = new Date( 81, 9, 20 );
    var target = extend( ori, str );

    ori.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't'
    });
    str.should.eql( 'me a test' );
    target.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't'
    });
    console.log( 'merge date with string test passed' );
  },

  'merge date with number' : function (){
    var ori    = new Date( 81, 9, 20 );
    var target = extend( ori, int );

    ori.should.eql({});
    int.should.eql( 10 );
    target.should.eql({});
    console.log( 'merge date with number test passed' );
  },

  'merge date with array' : function (){
    var ori    = new Date( 81, 9, 20 );
    var target = extend( ori, arr );

    ori.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    int.should.eql( 10 );
    target.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    console.log( 'merge date with array test passed' );
  },

  'merge date with date' : function (){
    var ori    = new Date( 81, 9, 20 );
    var target = extend( ori, date );

    ori.should.eql({});
    date.should.eql( new Date( 81, 4, 13 ));
    target.should.eql({});
    console.log( 'merge date with date test passed' );
  },

  'merge date with object' : function (){
    var ori    = new Date( 81, 9, 20 );
    var target = extend( ori, obj );

    ori.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    obj.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    target.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    console.log( 'merge date with object test passed' );
  },

  'merge object with string' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( ori, str );

    ori.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't',
      str: 'no shit',
      int: 76,
      arr: [ 1, 2, 3, 4 ],
      date: new Date( 81, 7, 26 )
    });
    str.should.eql( 'me a test' );
    target.should.eql({
      '0' : 'm',
      '1' : 'e',
      '2' : ' ',
      '3' : 'a',
      '4' : ' ',
      '5' : 't',
      '6' : 'e',
      '7' : 's',
      '8' : 't',
      str: 'no shit',
      int: 76,
      arr: [ 1, 2, 3, 4 ],
      date: new Date( 81, 7, 26 )
    });
    console.log( 'merge object with string test passed' );
  },

  'merge object with number' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( ori, int );

    ori.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    int.should.eql( 10 );
    target.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    console.log( 'merge object with number test passed' );
  },

  'merge object with array' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( ori, arr );

    ori.should.eql({
      '0' : 1,
      '1' : 'what',
      '2' : new Date( 81, 8, 4 ),
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    arr.should.eql([ 1, 'what', new Date( 81, 8, 4 )]);
    target.should.eql({
      '0' : 1,
      '1' : 'what',
      '2' : new Date( 81, 8, 4 ),
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    console.log( 'merge object with array test passed' );
  },

  'merge object with date' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( ori, date );

    ori.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    date.should.eql( new Date( 81, 4, 13 ));
    target.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    });
    console.log( 'merge object with date test passed' );
  },

  'merge object with object' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( ori, obj );

    ori.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    obj.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    target.should.eql({
      str : 'me a test',
      int : 10,
      arr : [ 1, 'what', new Date( 81, 8, 4 )],
      date : new Date( 81, 4, 13 )
    });
    console.log( 'merge object with object test passed' );
  },

  'deep clone' : function (){
    var ori = {
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 )
    };
    var target = extend( true, ori, deep );

    ori.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 ),
      ori : {
        str : 'me a test',
        int : 10,
        arr : [ 1, 'what', new Date( 81, 8, 4 )],
        date : new Date( 81, 4, 13 )
      },
      layer : {
        int : 10,
        str : 'str',
        date : new Date( 84, 5, 12 ),
        arr : [ 101, 'dude', new Date( 82, 10, 4 )],
        deep : {
          str : 'me a test',
          int : 10,
          arr : [ 1, 'what', new Date( 81, 8, 4 )],
          date : new Date( 81, 7, 4 )
        }
      }
    });
    deep.should.eql({
      ori : {
        str : 'me a test',
        int : 10,
        arr : [ 1, 'what', new Date( 81, 8, 4 )],
        date : new Date( 81, 4, 13 )
      },
      layer : {
        int : 10,
        str : 'str',
        date : new Date( 84, 5, 12 ),
        arr : [ 101, 'dude', new Date( 82, 10, 4 )],
        deep : {
          str : 'me a test',
          int : 10,
          arr : [ 1, 'what', new Date( 81, 8, 4 )],
          date : new Date( 81, 7, 4 )
        }
      }
    });
    target.should.eql({
      str : 'no shit',
      int : 76,
      arr : [ 1, 2, 3, 4 ],
      date : new Date( 81, 7, 26 ),
      ori : {
        str : 'me a test',
        int : 10,
        arr : [ 1, 'what', new Date( 81, 8, 4 )],
        date : new Date( 81, 4, 13 )
      },
      layer : {
        int : 10,
        str : 'str',
        date : new Date( 84, 5, 12 ),
        arr : [ 101, 'dude', new Date( 82, 10, 4 )],
        deep : {
          str : 'me a test',
          int : 10,
          arr : [ 1, 'what', new Date( 81, 8, 4 )],
          date : new Date( 81, 7, 4 )
        }
      }
    });

    target.layer.deep = 339;
    deep.should.eql({
      ori : {
        str : 'me a test',
        int : 10,
        arr : [ 1, 'what', new Date( 81, 8, 4 )],
        date : new Date( 81, 4, 13 )
      },
      layer : {
        int : 10,
        str : 'str',
        date : new Date( 84, 5, 12 ),
        arr : [ 101, 'dude', new Date( 82, 10, 4 )],
        deep : {
          str : 'me a test',
          int : 10,
          arr : [ 1, 'what', new Date( 81, 8, 4 )],
          date : new Date( 81, 7, 4 )
        }
      }
    });
    console.log( 'merge object with object test passed' );
  }

//----- NEVER USE EXTEND WITH THE ABOVE SITUATION ------------------------------
};






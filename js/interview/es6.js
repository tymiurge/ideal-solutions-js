// block variables
// const
// default parameter values
// defalut value expression
    var w = 1, z = 2;
    function foo( x = w + 1, y = x + 1, z = z + 1 ) {
        console.log( x, y, z );
    }
    foo();
    // here in parameters
    // x is assigned to 2 (w found in the scope above)
    // y is assigned to 3 (x found in the parameters scope)
    // z causes ReferencesError

// Desctructing or structured assignment 
    function foo() { return [1,2,3]; }
    var [ a, b, c ] = foo();
    console.log(a, b, c) // 1 2 3

    var [ a, b, c ] = {a: 1, b: 2, c: 3};
    console.log(a, b, c) // 1 2 3

    // might be applied to the classic task:
    var x = 10, y = 20;
    [ y, x ] = [ x, y ];
    // now x = 20, y = 10

    // or 
    var a = [2,3,4];
    var [ H, ...T ] = a;
    console.log( H, T ); // 2 [3,4]

// Desctructing parameters
    /*array desctructing*/
    function foo( [ x, y ] ) {
        console.log( x, y );
    }
    foo( [ 1, 2 ] ); // 1 2
    foo( [ 1 ] ); // 1 undefined
    foo( [] );
    /*object desctructing */
    function foo( { x, y } ) {
        console.log( x, y );
    }
    foo( { y: 1, x: 2 } ); // 2 1
    foo( { y: 42 } ); // undefined 42
    foo( {} );

// Concise properties
    const a = {x, y}

// Concise methods
var o = {
    x() { /* .. */ },
    y() { /* .. */ },
}

// getters and setters
    var o = {
        __id: 10,
        get id() { return this.__id++; },
        set id(v) { this.__id = v; }
    }
    o.id; // get is used
    o.id = 20; // set is used 
// Computed Property Names
    var prefix = "user_";
    var o = {
        [ prefix + "foo" ]: function(){  },
        [ prefix + "bar" ]: function(){  }
    };
// super
    super([arguments]); // calls the parent constructor.
    super.functionOnParent([arguments]);

// Template Literals (should have been called interpoliterals)
    var name = "Kyle";
    var greeting = `Hello ${name}!`;
    console.log( greeting ); // "Hello Kyle!"
    console.log( typeof greeting ); // "string"

// Tagged Template Literals (sake: tagged string literals.)
    function tag(strings, ...values) {
        return strings.reduce( function(s,v,idx){
            return s + (idx > 0 ? values[idx-1] : "") + v;
        }, "" );
    }
    var desc = "awesome";
    var text = tag`Everything is ${desc}!`;
    console.log( text ); // Everything is awesome!

// Raw Strings
    function showraw(strings, ...values) {
        console.log( strings );
        console.log( strings.raw );
    }
    showraw`Hello\nWorld`;
    // [ "Hello
    // World" ]
    // [ "Hello\nWorld" ]

// number literals 
    var dec = 42,
        oct = 0o52, // or `0O52` :(
        hex = 0x2a, // or `0X2a` :/
        bin = 0b101010; // or `0B101010` :/
/*
Extending Natives

class MyCoolArray extends Array {
    first() { return this[0]; }
    last() { return this[this.length - 1]; }
}
var a = new MyCoolArray( 1, 2, 3 );
a.length; // 3
a; // [1,2,3]
a.first(); // 1
a.last(); // 3

*/

/*
Extending Error


class Oops extends Error {
    constructor(reason) {
        this.oops = reason;
    }
}
// later:
var ouch = new Oops( "I messed up!" );
throw ouch;

!!!!
The ouch custom error object in this previous snippet will behave
like any other genuine error object, including capturing stack.
That’s a big improvement!
*/


/*
new.target

value available in all functions,
 - in normal functions it will always be undefined. 
 - In any con‐structor, new.target always points at the constructor that new
   actually directly invoked, even if the constructor is in a parent class
   and was delegated to by a super(..) call from a child constructor.

If new.target is undefined, you know the function was not called
with new. You can then force a new invocation if that’s necessary.
class Foo {
    constructor() { console.log( "Foo: ", new.target.name ); }
}
class Bar extends Foo {
    constructor() {
        super();
        console.log( "Bar: ", new.target.name );
    }
    baz() {
        console.log( "baz: ", new.target );
    }
}
var a = new Foo();  // Foo: Foo
var b = new Bar();  // Foo: Bar <-- respects the `new` call-site // Bar: Bar
b.baz(); // baz: undefined
*/

/*
Symbol.species Constructor Getter
class MyCoolArray extends Array {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Array; }
}
var a = new MyCoolArray( 1, 2, 3 ),
b = a.map( function(v){ return v * 2; } );
b instanceof MyCoolArray; // false
b instanceof Array; // true


or 


class Foo {
    // defer `species` to derived constructor
    static get [Symbol.species]() { return this; }
    spawn() {
        return new this.constructor[Symbol.species]();
    }
}
class Bar extends Foo {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Foo; }
}
var a = new Foo();
var b = a.spawn();
b instanceof Foo; // true
var x = new Bar();
var y = x.spawn();
y instanceof Bar; // false
y instanceof Foo;

*/
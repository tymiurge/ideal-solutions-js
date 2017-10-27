function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();

// there is a danger of implicit lost, however...
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object
setTimeout( obj.foo, 100 ); // "oops, global"

// ... and a pattern called 'hard binding' to negotiate that dander: 
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

var bar = function() { // hard-bound `bar` can no longer have its `this` overridden
    foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2
bar.call( window ); // 2

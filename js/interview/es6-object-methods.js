// Object.setPrototypeOf(..)

// Object.freeze() - Freezes an object: other code can't delete or change any properties.

// Object.js
/*
    if (!Object.is) {
        Object.is = function(x, y) {
        // SameValue algorithm
        if (x === y) { // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
        }
        };
    }
*/

// Object.seal()
/*
    const object1 = {
    property1: 42
    };

    Object.seal(object1);
    object1.property1 = 33;
    console.log(object1.property1);
    // expected output: 33

    delete object1.property1; // cannot delete when sealed
    console.log(object1.property1);
    // expected output: 33
*/

// Object.entries() Returns an array of a given object's own enumerable property [key, value] pairs.
/*
    const object1 = { foo: 'bar', baz: 42 };
    console.log(Object.entries(object1)[1]);
    // expected output: Array ["baz", 42]

    const object2 = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.entries(object2)[2]);
    // expected output: Array ["2", "c"]

    const object3 = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.entries(object3)[0]);
    // expected output: Array ["2", "b"]
*/

// Object.prototype.constructor
/*
    function Tree(name) {
    this.name = name;
    }

    var theTree = new Tree('Redwood');
    console.log('theTree.constructor is ' + theTree.constructor);

    ===>
    theTree.constructor is function Tree(name) {
    this.name = name;
}
*/
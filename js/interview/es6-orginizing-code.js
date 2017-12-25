// Map
    var m = new Map();
    m.set( "foo", 42 );
    m.set( { cool: true }, "hello world" );
    var it1 = m[Symbol.iterator]();
    var it2 = m.entries();
    it1.next(); // { value: [ "foo", 42 ], done: false }
    it2.next(); // { value: [ "foo", 42 ], done: false }

// Custom iterators
    var Fib = {
        [Symbol.iterator]() {
            var n1 = 1, n2 = 1;
            return {
                // make the iterator an iterable
                [Symbol.iterator]() { return this; },
                next() {
                    var current = n2;
                    n2 = n1;
                    n1 = n1 + current;
                    return { value: current, done: false };
                },
                return(v) {
                    console.log("Fibonacci sequence abandoned.");
                    return { value: v, done: true };
                }
            };
        }
    };
    for (var v of Fib) {
    console.log( v );
    if (v > 50) break;
    }
    // 1 1 2 3 5 8 13 21 34 55
    // Fibonacci sequence abandoned.

// generators
    function *foo() {
        while (true) {
        yield Math.random();
        }
    }

// yield on iterables
    function *foo() {
        yield *[1,2,3];
    }

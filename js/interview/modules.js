/**
 * AMD, UMD, CommonJS, or ES6, ????
 */
/**
 * references:
 *  - https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
 *  - https://stackoverflow.com/questions/22906662/javascript-design-pattern-difference-between-module-pattern-and-revealing-modul
 *  - http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */

/**
 * DEFINITION:
 * The module pattern is an object-creation pattern designed to create singleton objects with private data.
 */

// Anonymous closure
var person = (function() {
    var age = 25;
    
    return {
        name: "Nicholas",
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        }
    };
}());
console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26

// revealing module pattern (which arranges all variables and methods at the top of the IIFE
// and simply assigns them to the returned object.
var person = (function() {
    var age = 25;
    function getAge() {
        return age;
    }
    function growOlder() {
        age++;
    }
    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder: growOlder
    };
}());

/**
 * NOTES: The module pattern is great for defining individual objects that have pri-
 * vate properties, but what about custom types that also require their own privates?
 */
function Person(name) {
    var age = 25;
    this.name = name;
    this.getAge = function() {
        return age;
    };
    this.growOlder = function() {
        age++;
    };
}
var person = new Person("Nicholas");

// or 
    function Hello(name) {
        function greeting() {
            console.log( "Hello " + name + "!" );
        }
        // public API
        return {
            greeting: greeting
        };
    }

/**
 * NOTES:
 * If you want private data to be shared across all instances (as if it were
 * on the prototype), you can use a hybrid approach that looks like the module pattern but uses a constructor
 */
var Person = (function() {
    var age = 25;
    function InnerPerson(name) {
        this.name = name;
    }
    InnerPerson.prototype.getAge = function() {
        return age;
    };
    InnerPerson.prototype.growOlder = function() {
        age++;
    };
    return InnerPerson;
}());
console.log(person1.name); // "Nicholas"
console.log(person1.getAge()); // 25
console.log(person2.name); // "Greg"
console.log(person2.getAge()); // 25
person1.growOlder();
console.log(person1.getAge()); // 26
console.log(person2.getAge()); // 26


/**
 * MIXINS: a type of pseudoinheritance
 * Mixins occur when one object acquires the properties of another without modifying the prototype chain. 
 * The first object (a receiver) actually receives the properties of the second object (the supplier) by 
 * copying those properties directly. 
 */
function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }
    return receiver;
}

/**
    A scope-safe version of Person looks like this:
    function Person(name) {
        if (this instanceof Person) {
            this.name = name;
        } else {
            return new Person(name);
        }
    }
*/

// Global import 
(function () {
    
}(globalVariable))

// object interface
var myObj = (function () {
    return {
        sayHello: function() { console.log('helloi') }
    }
}())
myObj.sayHello()
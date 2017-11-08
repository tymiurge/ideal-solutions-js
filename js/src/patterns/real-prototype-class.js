

/**
 * pseudo-classical-java-like objects:
 * cons: 
 *  - 'prototype' takes too much of space and attention - not really readable 
 *  - no ability to create trully private methods 
 *  - no explicit (or visible or easy to implement) approach to ask about a groups of objects
 * - JS classes are not Java-like classes
 */
function MyClass() {};
 
MyClass.prototype.method1 = function () { /* ... */ };
MyClass.prototype.method2 = function () { /* ... */ };
// ... 
MyClass.prototype.methodN = function () { /* ... */ };
 
var instance = new MyClass();

/**
 * recommended is to use Object.create to utilize creating a real-prototype object
 */
var myProto, makeInstance, instance;
 
myProto = {
  method1 : function () { /*...*/ },
  method2 : function () { /*...*/ },
  // ...
  methodN : function () { /*...*/ }
};
makeInstance = function () { return Object.create( myProto ); };
instance = makeInstance();
/**
 * props: 
 * - with a function closure (instead of object literal) it easy to create a truly private 
 *   methods for the prototype
 * - makeInstance can be used to keep track of all instances in memory, setting initial 
 *   properties based on the current state of the application
 * - makes available questions about groups: i.e. how many words on screen?
 * 
 */

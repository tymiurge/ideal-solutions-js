/**
 * 2 forms of objects
 */

// literal
var myObj = {
    key: value
}

//constructed
var myObj = new Object()
myObj.key = value

// with Object.create
// actually it's the same as literal so the form of object creation isn't "enumerable"
var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: 'waiting for godot',
        writable: true
    }
})
/**
 * A Decorator is an object which adds functionality to another object dynamically. 
 * It can be used to enhance the behavior of an object without requiring the author to 
 * reopen its class. 
 * 
 * Formal Definition
 *      Attach additional responsibilities to an object dynamically. 
 *      Decorators provide a flexible alternative to subclassing for extending functionality.
 * 
 * Pros and Cons
 *      Pro: More flexible than inheritance.
 *      Pro: Avoids feature-laden classes high up in the hierarchy.
 *      Con: A decorator and its component aren’t identical.
 *      Con: Lots of little objects.
 */
function Validator () {  
    this.errors = [];
    this.decoratorsList = [];
}

// The decoratorsList will hold all of our decorator functions
/**
 * @param name validator function
 */
Validator.prototype.decorate = function(name) {  
    this.decoratorsList.push(name);
};

// Each decorator is actually an object which implements the same 
// interface as our Validator object. When we have all of our decorators added 
// to our decoratorsList we'll be able to loop through and call validate on each one.
Validator.decorators = {};

Validator.decorators.hasName = {  
    validate: function(form) {
        // Code to verify presence of name...

        // If no name found...
        this.errors.push('no name!');
    }
};

Validator.decorators.hasAge = {  
    validate: function(form) {
        // Code to verify presence of age...

        // If no age found...
        this.errors.push('no age!');
    }
};

Validator.decorators.hasZipCode = {  
    validate: function(form) {
        // Code to verify presence of zip code...

        // If no zip found...
        this.errors.push('no zip!');
    }
};

Validator.prototype.validate = function(form) {  
    var i,
        max,
        name;

    this.form = form;

    max = this.decoratorsList.length;
    for (i = 0; i < max; i++) {
        name = this.decoratorsList[i];
        Validator.decorators[name].validate.call(this, form);
    };
};

// ==========================================================================
//            assemble all the stuff above in a single piece
// ==========================================================================
var validator = new Validator();  
// ??? why do we need to keep decorators in the Validator.decorators obj and use decorators list  ???
validator.decorate('hasName');  
validator.decorate('hasAge');  
validator.decorate('hasZipCode');  
validator.validate({}); // we'll just use a blank object in place of real form data  
console.log(validator.errors);


// ==========================================================================
//      in case if we need to pass some arguments to decorators
// ==========================================================================
Validator.prototype.decorate = function(name, args) {  
    this.decoratorsList.push({ name: name, args: args });
};
Validator.prototype.validate = function(form) {  
    var i,
        max,
        temp,
        name,
        args;

    this.form = form;

    max = this.decoratorsList.length;
    for (i = 0; i < max; i++) {
        temp = this.decoratorsList[i];
        name = temp.name;
        args = temp.args;
        Validator.decorators[name].validate.call(this, form, args);
    };
};

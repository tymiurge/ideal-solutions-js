/*
An error occurs if you call the Person constructor in strict mode without using new.
This is because strict mode doesn’t assign this to the global object. Instead, this
remains undefined, and an error occurs whenever you attempt to create a property
on undefined.
*/

// octal literal (052) disallowed
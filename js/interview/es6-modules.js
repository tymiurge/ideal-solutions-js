/*

a non-module need to load a module:

Reflect.Loader.import( "foo" ) // returns a promise for `"foo"`
    .then( function(foo){
        foo.bar();
    }
);

You can also use Reflect.Loader.import(..) in a real module to
dynamically/conditionally load a module, where import itself would
not work. You might, for instance, choose to load a module contain‐
ing a polyfill for some ES7+ feature if a feature test reveals it’s not
defined by the current engine.
 */

 /*
 The Reflect.Loader.import(..) call may support a second argu‐
ment for specifying various options to customize the import/load
task. For example:
Reflect.Loader.import( "foo", { address: "/path/to/foo.js" } )
.then( function(foo){
// ..
} )
It’s also expected that a customization will be provided (through
some means) for hooking into the process of loading a module,
where a translation/transpilation could occur after load but before
the engine compiles the module.
For example, you could load something that’s not already an ES6-
compliant module format (e.g., CoffeeScript, TypeScript, Com‐
monJS, AMD). Your translation step could then convert it to an
ES6-compliant module for the engine to then process.
 */
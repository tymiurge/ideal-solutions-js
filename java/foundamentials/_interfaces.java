/**
Interfaces can contain only
    - method signatures
    - fields
*/

/**
Overlaping method signature -  java specification does not give any 
solution to this. It is up to developer to decide what to do in that
situation.
*/

/**
Interfaces can contain both VARIABLES and CONSTANTS. 
However often it does not make sense to place variables in an interface. 
*/

/**
All fields and methods are publis, even if the 'public' keyword is left out.
Private - obviously no sence. 
Protected - intended for sharing implementation with subclassed. Since 
intefaces have no implementation - no sense in protected.  
*/

/** 
DEFAULT METHODS:
Classes that implement the interface but which contain no implementation 
for the default interface will then automatically get the default 
method implementation.

EXAMPLE:
public interface ResourceLoader {
    Resource load(String resourcePath);
    default Resource load(Path resourcePath) {
        // provide default implementation to load
        // resource from a Path and return the content
        // in a Resource object.
    }
}
*/

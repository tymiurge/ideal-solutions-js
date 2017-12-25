
/**
INHERITANCE: interface can inherit another interface:
public interface MySuperInterface {
    public void saiHello();
}
public interface MySubInterface extends MySuperInterface {
    public void sayGoodbye();
}
*/

/** 
MULTIPLE INHERITANCE:
interfaces can have multiple INHERITANCE:
public interface MySubInterface extends
    SuperInterface1, SuperInterface2 {
    public void sayItAll();
}
*/

/**
INHERITANCE and DEFAULT METHODS.

If two interfaces contain the same method signature (name + parameters) 
and one of the interfaces declare this method as a default method, 
a class cannot automatically implement both interfaces

The situation is the same if an interface extends (inherits from) multiple 
interfaces, and one or more of these interfaces contain methods with the 
same signature, and one of the superinterfaces declare the overlapping 
method as a default method.

In both of the above situations the Java compiler requires that the class 
implementing the interface(s) explicitly implements the method which causes 
the problem.
*/
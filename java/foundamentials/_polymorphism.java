/**
DEFINITION:
    Polymorphism is a language’s ability to process objects of various types and classes through a single, 
    uniform interface

TYPES:
    Polymorphism in Java has two types: 
        - Compile time polymorphism (static binding): method overloading is an example.
        - Runtime polymorphism (dynamic binding): method overriding is an example.
 */

// ========================================================================================================
//             EXAMPLE OF DYNAMIC POLYMORPHISM
// ========================================================================================================

class Vehicle{
    public void move() { System.out.println(“Vehicles can move!!”); }
}

class MotorBike extends Vehicle{
    public void move() { System.out.println(“MotorBike can move and accelerate too!!”); }
}

class Test{
    public static void main(String[] args){
        Vehicle vh=new MotorBike();
        vh.move();    // prints MotorBike can move and accelerate too!!
        vh = new Vehicle();
        vh.move();    // prints Vehicles can move!!
    }
}

/**
ONE MORE DEFINITION:
Basically, polymorphism means that an instance of an class (an object) 
can be used as if it were of different types. Here, a type means either a class 
or an interface.
*/
/** 
                                        (I) Iterable
                                            |
                                            |
                                        (I) Collection
                                            |
        ____________________________________|________
        |                      |                    |
        |                      |                    |
        (I) List            (I) Set             (I) Queue           (I) Map
        |                      |                    |                   |
        |                      |                    |                   |
        (C) ArrayList       (C) HashSet         (C) LinkedList      (C) HasMap
        (C) LinkedList      (C) LinkedHasSet    (C) PriorityQueue   (C) HashTable
        (C) Vector          (C) TreeSet         (C) Dequeue         (C) TreeMap
*/

/**
List
    List interface is an ordered collection in which duplicate elements are also allowed.
    Elements are stored in a sequential way and hence its elements can be accessed using the index value.

LinkedList
    - LinkedList is a class which implements the List interface.
    - It is similar to that of LinkedList except that the ArrayList uses Array data structure 
      implicitly whereas LinkedList uses doubly linked list internally to store the elements. 
      Like ArrayList, LinkedList is also non synchronized.
    - Search operation is faster in ArrayList, since the index value is enough to retrieve an element, 
      whereas in LinkedList one has to traverse through all the elements.
    - Operations like insert and delete are faster in LinkedList since only the pointer location 
      has to be changed whereas in ArrayList all the elements needed to be shifted after the change.
    - Thus LinkedList is better for manipulating the data and ArrayList is better for storing 
      and accessing the data.

Vector
    - Vector class implements the List interface.
    - It uses array data structure internally to represent the elements in it. 
      It is similar to that of ArrayList except that the vector class is synchronized. 
      It is thread safe.

*/

/**
Set 
    Set is an unordered collection. It does not maintain any order while storing the elements. 
    It does not allow duplicate elements.
*/

/**
Map 
    Map is an interface which maps keys to values in which each key has to be unique.
*/
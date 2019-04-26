/**
 * to simulate private methods with classes there are 3 approaches:
 *    1. the underscore naming convention
 *    2. js classes with scoped Symbols
 *    3. using WeakSet
 */

 // ====================== 1 ======================
 class Stack {
   constructor() {
     this._count = 0;
     this._items = {}
   }
 }


// ====================== 2 ======================
const _items = Symbol('stackItems');
class Stack2 {
  constructor() {
    this[_items] = []
  }
}

const stack = new Stack2();
stack._items = 'someting' // fails to access _items

// however this approach still provides false private property:
let objSymbols = Object.getOwnPropertySymbols(stack)
stack[objectSymbols[0].push(1)] 


// ====================== 3 ======================

const items = new WeakMap();
class Stack3 {
  constructor() {
    items.set(this, [])
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}
 
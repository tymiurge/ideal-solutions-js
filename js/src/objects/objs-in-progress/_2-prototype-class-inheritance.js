let data = []

function Deck() {}

Deck.prototype.size = function() {
    return data.length
}

Deck.prototype.dequeue = function() {
    let node = data[0]
    data = data.slice(1, data.length)
    return node
}

Deck.prototype.enqueue = function(node) {
    data.push(node)
}

function Queue(options = {}) {
   Deck.call(this)
}

Queue.prototype = Object.create(Deck.prototype)

Queue.prototype.put = function(node) {
   this.enqueue(node)
}

Queue.prototype.get = function() {
    return this.dequeue()
}

/*
 * in this case the private variable data is boing to be a problem!
 * var q1 = new Queue()
 * q1.put('node in q1') 
 * var q2 = new Queue()
 * and the size of q2 already is 1! - meaning 'node in q1' is presented in q2
 */


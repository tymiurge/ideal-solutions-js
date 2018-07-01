
function Deck() {
    let data = []

    this.size =  function() {
        return data.length
    }

    this.dequeue = function() {
        let node = data[0]
        data = data.slice(1, data.length)
        return node
    }

    this.enqueue = function(node) {
        data.push(node)
    }
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
 *
 * and there is another problem - limiting visibility/access on/to method from parent class.
 * example:
 * var queue = new Queue()
 * queue.dequeue() 
 * the last statement can breack Queue functionality in case if the last builds own limitations (like 
 * turning limited capacity on
 *
 * to sum up:
 * - how to make so that methods from a parent class would be invisible for users of the Child one 
 *
 */

/*
 * and there is another problem:
 * in case if there is a need to rewrite a method from a parent class and the parent class method
 * has access to a private variable from the parent scope - the child class has to 
 * completely recreate the mechanism of operating with the parent scope private variable
 * example:
 *
 * //we're here trying to rewrite the enqueue method from Deck
 * Queue.prototype.enqueue = function(node) {
 * 	// the access to data from Deck scope is lost
 * }
 *
 */

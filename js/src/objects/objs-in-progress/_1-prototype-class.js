import NullableQueueProcessingError from './exceptions/NullableQueueProcessingError'
import InvalidQueueCapacityValueError from './exceptions/InvalidQueueCapacityValueError'
import QueueCapacityExceededError from './exceptions/QueueCapacityExceededError'
import Deck from './deck'
// https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5

// different approaches of creating classes/modules in JS:
// https://stackoverflow.com/questions/55611/javascript-private-methods

// rear - at the back
// enqueue - put to a queue
// dequeue - remove from a queue


// Double-ended queue
// Circular queue
// priority queue
// 
function Queue(options = {}) {
    this.exceptionOnExceed = false || options.exceptionOnExceed
    this.capacity = -1
    var capacityOffer = options.capacity
    if (!(capacityOffer === undefined)) {
        if (capacityOffer <= 0 || !Number.isInteger(capacityOffer)) {
            throw new InvalidQueueCapacityValueError()
        }
        this.capacity = capacityOffer
    }
    this.data = []
}

Queue.prototype = Object.create(Deck.prototype)

Queue.prototype.put = function(node) {
    if (this.capacity !== -1 && this.data.length === this.capacity) {
        throw new QueueCapacityExceededError(this.capacity)
    }
    this.data.push(node)
}

Queue.prototype.get = function() {
    if (this.data.length === 0) {
        if (this.exceptionOnExceed) { 
            throw new NullableQueueProcessingError() 
        } else {
            return null
        }
    }
    let node = this.data[0]
    this.data = this.data.slice(1, this.queue.length)
    return data
}

Queue.prototype.constructor = Queue

export default Queue
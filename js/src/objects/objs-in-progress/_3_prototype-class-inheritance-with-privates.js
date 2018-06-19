
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


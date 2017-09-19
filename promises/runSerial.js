/*
const serial = funcs => 
    funcs.reduce(
        (promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))), 
        Promise.resolve([])
    )

*/

const serial = funcs => {
    return funcs.reduce(
        /*accumulator*/ 
        (promise, func) => {
            return promise.then(result => {
                return func().then(Array.prototype.concat.bind(result))
            })
        }, 
        /*current value*/
        Promise.resolve([])
    )
}

const serialSimplified = list => {
    const concat = list => Array.prototype.concat.bind(list)
    const promiseConcat = f => x => f().then(concat(x))
    const promiseReduce = (acc, x) => acc.then(promiseConcat(x))

    return funcs => {
        return funcs.reduce(promiseReduce, Promise.resolve([]))
    }
}

const p1 = new Promise((resolve, reject) => setTimeout(
    () => {
        console.log('A')
        resolve()
    }, 
    3000
))

const p2 = new Promise((resolve, reject) => setTimeout(
    () => {
        console.log('B')
        resolve()
    }, 
    1000
))

serialSimplified([p1, p2])
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


const concat = list => Array.prototype.concat.bind(list)
const promiseConcat = f => x => f().then(concat(x))
const promiseReduce = (acc, x) => acc.then(promiseConcat(x))

const serialSimplified = funcs => {
    return funcs.reduce(promiseReduce, Promise.resolve([]))
}


const t1 = 3000
const t2 = 1000

const funcs = [t1, t2].map((timeout, idx) => () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(idx + '-th promise executed with timeout = ' + timeout)
        resolve(idx)
    }, timeout)
}))

serialSimplified(funcs).then(results => console.log(results))
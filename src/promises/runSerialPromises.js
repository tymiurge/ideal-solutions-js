/** 
 * serial executes Promises sequentially.
 * @param {funcs} An array of funcs that return promises.
 * @example
 * const urls = ['/url1', '/url2', '/url3']
 * serial(urls.map(url => () => $.ajax(url)))
 *     .then(console.log.bind(console))
 * @see serialSimplified 
 * @see serialChewed
 **/
const serial = funcs => funcs.reduce(
    (promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))), 
    Promise.resolve([])
)

serialSimplified = funcs => {
    const concat = list => Array.prototype.concat.bind(list)
    const promiseConcat = f => x => f().then(concat(x))
    const promiseReduce = (acc, x) => acc.then(promiseConcat(x))
    return funcs.reduce(promiseReduce, Promise.resolve([]))
}


function serialChewed(arrayOfFuncsReterningPromise) {
    const concat = function(previousResult) {
        return Array.prototype.concat.bind(previousResult)
    } 
    const promiseConcat = function(funcReterningPromise) {
        // function returning 
        return function(x) {
            return funcReterningPromise().then(concat(x))
        }
        
    }
    return arrayOfFuncsReterningPromise.reduce(
        // reduce callback
        function(promiseResultsAccumulator, funcReterningPromise) {
            return promiseResultsAccumulator.then(
                function(promiseResult) {
                    const resultAccumulatorFunction = promiseConcat(funcReterningPromise)
                    return resultAccumulatorFunction(promiseResult)
                }
            )
        }, 
        // accumulator initial value
        Promise.resolve([])
    )
}



/**
 *  Test
 *  Demonstrates that first promise that takes 3000 completes before the second one that takes 1000 ms.
 **/

const funcs = [3000, 1000].map((timeout, idx) => () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(idx + '-th promise executed with timeout = ' + timeout)
        resolve(idx)
    }, timeout)
}))

serial(funcs).then(results => console.log(results))
// serialSimplified(funcs).then(results => console.log(results))
// serialChewed(funcs).then(results => console.log(results))
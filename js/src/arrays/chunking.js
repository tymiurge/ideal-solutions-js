/**
 * An interesting but not optimal solution of array chunking 
 * @param {*} array 
 * @param {*} chunkSize 
 */
function chunkWithApply(array, chunkSize) {
    return [].concat.apply(
        [],
        array.map(function(elem,i) {
            return i % chunkSize ? [] : [array.slice(i,i+chunkSize)];
        })
    );
}

/**
 * and this solution is optimal despite or because of its simplicity 
 * @param {*} arr 
 * @param {*} chunkSize 
 */
function pureOldFor(arr, chunkSize) {
    var results = [];
    for (var i = 0; i <arr.length; i += chunkSize)
        results.push(arr.slice(i, i + chunkSize));
    return results;
}

// ==========================================================================
//                              Tests
// ==========================================================================
const arr = [1, 2, 3, 4, 5, 6]
console.log(pureOldFor(arr, 2))         // outputs [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(chunkWithApply(arr, 2))     // outputs [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

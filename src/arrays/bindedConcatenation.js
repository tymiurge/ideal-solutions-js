/**
 * binding Array.prototype.concat function to an array might be used to pass the binded function 
 * as an argument to another function 
 * for exemple when you need iteratively concat arrays to an accumulating one 
 * @see promises/runSerialPromises
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = arr1.concat(arr2)
const bindedConcat = Array.prototype.concat.bind(arr1)
const arr4 = bindedConcat(arr2)

console.log(arr3) // outputs [1, 2, 3, 4, 5, 6]
console.log(arr4) // outputs [1, 2, 3, 4, 5, 6]
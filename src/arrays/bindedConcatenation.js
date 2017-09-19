const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = arr1.concat(arr2)
const bindedConcat = Array.prototype.concat.bind(arr1)
const arr4 = bindedConcat(arr2)

console.log(arr3)
console.log(arr4)
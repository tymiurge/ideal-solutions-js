/**
* chunks array into array of arrays with the chuckSize dimension 
* @param {*} arr 
* @param {*} chunkSize 
*/
const chunk = (arr, chunkSize) => {
    let results = []
    for (let i = 0; i < arr.length; i += chunkSize)
        results.push(arr.slice(i, i + chunkSize));
    return results
}

export { chunk }
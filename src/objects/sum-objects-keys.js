var a = {
	'failed': 1,
  'passed': 3
}
var b = {
	'failed': 3, 
  'skipped': 1
}
function objectKeysSum(arr) {
  return arr.reduce((accumulator, current) => {
    for (let key in current) {
      if (current.hasOwnProperty(key))
        accumulator[key] = (accumulator[key] || 0) + current[key];
    }
    return accumulator;
  }, {});
}

var obj = objectKeysSum([a, b])

alert('failed = ' + obj.failed)
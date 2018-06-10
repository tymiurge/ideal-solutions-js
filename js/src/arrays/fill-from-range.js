var N = 10; 
Array.apply(null, {length: N}).map(Number.call, Number)
result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


Array.apply(null, {length: N}).map(Function.call, Math.random)
result: [0.7082694901619107, 0.9572225909214467, 0.8586748542729765, 0.8653848143294454, 0.008339877473190427, 0.9911756622605026, 0.8133423360995948, 0.8377588465809822, 0.5577575915958732, 0.16363654541783035]




In ES6 using Array from() and keys() methods.

Array.from(Array(10).keys())
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



Shorter version using spread operator.
[...Array(10).keys()]
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
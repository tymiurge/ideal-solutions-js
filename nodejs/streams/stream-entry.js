// from here: https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

/*
let's write 1 million lines into a file
*/
const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();

/*
then let's fancy somebody requests the file conetnt over web server:
*/
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8000);

/*
We basically put the whole big.file content in memory before we wrote it out to the response object. This is very inefficient.

piping it to res is better:
*/

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
/*
program doesn't need to put all the content into memory before sending res
*/

/*
=============================================================================================
There are four fundamental stream types in Node.js: Readable, Writable, Duplex, and Transform streams.
 - A readable stream is an abstraction for a source from which data can be consumed.
   An example of that is the fs.createReadStream method.
 - A writable stream is an abstraction for a destination to which data can be written.
   An example of that is the fs.createWriteStream method.
 - A duplex streams is both Readable and Writable. An example of that is a TCP socket.
 - A transform stream is basically a duplex stream that can be used to modify or transform the data
   as it is written and read. An example of that is the zlib.createGzip stream to compress the data using gzip.
   You can think of a transform stream as a function where the input is the writable stream part and
   the output is readable stream part. You might also hear transform streams referred to as “through streams.”

All streams are instances of EventEmitter. They emit events that can be used to read and write data.
However, we can consume streams data in a simpler way using the pipe method.

if we’re piping into a duplex stream, we can chain pipe calls just like we do in Linux:
readableSrc
  .pipe(transformStream1)
  .pipe(transformStream2)
  .pipe(finalWrtitableDest)

=============================================================================================
*/

/*
streams can also be consumed with events directly.

*/


readable.on('data', (chunk) => {
  writable.write(chunk);
});
readable.on('end', () => {
  writable.end();
});


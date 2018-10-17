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

/*
=============================================================================================

Events and functions of readable and Writable streams

--events--                       --events--

data                                drain
end                                 finish
error                               error
close                               close
read                                pipe/unpipe

-- functions --                  -- functions --
pipe(), unpipe()                     write()
read(), unshift(), resume()          end()
pause(), isPaused()                  cork(), uncork()
setEncoding                          seDefaultEncoding

drain  - a signal that the writable stream can receive more data.
finish - event, which is emitted when all data has been flushed to the underlying system.

The 'unpipe' event is emitted when the stream.unpipe() method is called on a Readable stream,
removing this Writable from its set of destinations.

*/

/*
implementing writable streams
*/
const { Writable } = require('stream');
class myWritableStream extends Writable {
}

// or
const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(outStream);
/*
implement a readable stream
*/
const { Readable } = require('stream');
const inStream = new Readable({
  read() {}
});

// or
const { Readable } = require('stream');
const inStream = new Readable({
  read() {}
});
inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ');
inStream.push(null); // No more data
inStream.pipe(process.stdout);

/* Implementing Duplex/Transform Streams */
const { Duplex } = require('stream');

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
/* implementing transform */
const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
//or
const { Transform } = require('stream');
const commaSplitter = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split(','));
    callback();
  }
});
const arrayToObject = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    const obj = {};
    for(let i=0; i < chunk.length; i+=2) {
      obj[chunk[i]] = chunk[i+1];
    }
    this.push(obj);
    callback();
  }
});
const objectToString = new Transform({
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    this.push(JSON.stringify(chunk) + '\n');
    callback();
  }
});
process.stdin
  .pipe(commaSplitter)
  .pipe(arrayToObject)
  .pipe(objectToString)
  .pipe(process.stdout)




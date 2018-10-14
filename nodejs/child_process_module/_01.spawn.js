// https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d

/*
We can easily spin a child process using Node’s child_process module and those child processes can easily communicate with each other with a messaging system.
*/

/*
 4 different ways to create a child process in Node: 
 	spawn(), 
 	fork(), 
 	exec(), 
 	execFile()
*/

/*
================================================================================================
spawn() example: 
================================================================================================
*/

const { spawn } = require('child_process');
const child = spawn('pwd');

/*
The result of executing the spawn function (the child object above) is a ChildProcess instance, which implements the EventEmitter API. This means we can register handlers for events on this child object directly. For example, we can do something when the child process exits by registering a handler for the exit event:

child.on('exit', function (code, signal) {
  console.log('child process exited with ' +
              `code ${code} and signal ${signal}`);
});

other events: 
disconnect, error, close, and message

The message event is the most important one. It’s emitted when the child process uses the process.send() function to send messages. This is how parent/child processes can communicate with each other.


Every child process also gets the three standard stdio streams
	child.stdin, 
	child.stdout,
	child.stderr.

stdout/stderr streams are readable streams while the stdin stream is a writable one

all streams are event emitters with events: disconnect, error, close and message and data!! on the readable strem:

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});


 We simply pipe a readable stream into a writable stream. Since the main process stdin is a readable stream, we can pipe that into a child process stdin stream. For example:

const { spawn } = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

In the example above, the child process invokes the wc command, which counts lines, words, and characters in Linux. We then pipe the main process stdin (which is a readable stream) into the child process stdin (which is a writable stream). The result of this combination is that we get a standard input mode where we can type something and when we hit Ctrl+D, what we typed will be used as the input of the wc command.


we can pipe the stdout of the find command to the stdin of the wc command to count all the files in the current directory:
const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});

*/

/*
============================================================================================================
					exec function
============================================================================================================
*/


/*

spawn 					| 			execute                                     |
______________________________________________________________________________________________________________________
doesn't create shell 	|	creates shell 										| -> spawn is a lit more efficient
uses streams for outputs|	buffers the command's generated output 				|
						|	and passed the whole output to a callback function 	|


The exec function is a good choice if you need to use the shell syntax and if the size 
of the data expected from the command is small. (Remember, exec will buffer the whole 
data in memory before returning it.)


The spawn function is a much better choice when the size of the data expected from the 
command is large, because that data will be streamed with the standard IO objects.
*/

/*
Here’s the previous (from spawn.js) find | wc example implemented with an exec function.
*/
const { exec } = require('child_process');

exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});

/*
Since the exec function uses a shell to execute the command, we can use the shell 
syntax directly here making use of the shell pipe feature.
*/

/*
We can make the spawned child process inherit the standard IO objects of its parents 
if we want to, but also, more importantly, we can make the spawn function use the shell
 syntax as well. Here’s the same find | wc command implemented with the spawn function:
*/

const child = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true
});

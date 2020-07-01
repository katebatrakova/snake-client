

//A Separate Module For The TCP Connection in client.js 

const { connect } = require('./client'); //same as const connect = require('./client').connect

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // Event Handling for User Input to terminate the game handleUserInput func
  stdin.on('data', handleUserInput)

  return stdin;
}

// Event Handling for User Input to terminate the game 
//key is the data
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
}




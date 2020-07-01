// Stores the active TCP connection object. For input module send data to the server
let connection;

// Setup User Interface
//   * Specifically, so that we can handle user input via stdin
//     * /
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SAY_THERE, SAY_HERE } = require('./constants');



const setupInput = function (conn) {
  connection = conn;
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
  if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (key === 'p') {
    connection.write(SAY_THERE);
  }
  if (key === 'o') {
    connection.write(SAY_HERE);
  }
}


module.exports = { setupInput };
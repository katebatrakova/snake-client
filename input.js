// Stores the active TCP connection object. For input module send data to the server
let connection;

// Setup User Interface
//   * Specifically, so that we can handle user input via stdin
//     * /


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
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'p') {
    connection.write('Say: there');
  }
  if (key === 'o') {
    connection.write('Say: here');
  }
}


module.exports = { setupInput };
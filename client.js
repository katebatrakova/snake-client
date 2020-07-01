const net = require('net');
//require the two constants
const { IP, PORT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  //attach event handler to handle incoming data ans console.log data to the player
  // conn.on('data', (data) => {
  //   console.log(data);
  // });
  //register a "connect" handler (a callback function)
  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server");
  });
  //upon connection Client Can Send a Reply
  conn.on('connect', (connect) => {
    conn.write('Name: KB');
  });
  // conn.on('connect', (connect) => {
  //   conn.write('Move: up');
  // });
  return conn;
}


//export an object containing our connect function with object shorthand notation 
module.exports = { connect };

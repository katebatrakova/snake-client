
const PORT = 50541;
const HOST = "135.23.222.148";

const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  //attach event handler to handle incoming data
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

console.log('Connecting ...');
connect();
const PORT = 50541; const HOST = "135.23.222.148";

const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  //attach event handler to handle incoming data ans console.log data to the player
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}


//export an object containing our connect function with object shorthand notation 
module.exports = { connect };
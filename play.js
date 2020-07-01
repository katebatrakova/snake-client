

//A Separate Module For The TCP Connection in client.js 

const { connect } = require('./client'); //same as const connect = require('./client').connect

const { setupInput } = require('./input');

console.log('Connecting ...');

// const conn = connect();
//Update to send the connection object returned from connect() into our setupInput() function.
setupInput(connect());







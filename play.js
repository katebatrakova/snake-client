

//A Separate Module For The TCP Connection in client.js 

const { connect } = require('./client'); //same as const connect = require('./client').connect

const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();







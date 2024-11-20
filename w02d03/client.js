const net = require('net');

const config = {
  port: 3000,
  host: 'localhost'
};

const connection = net.createConnection(config);

// configure the connection to use utf-8
connection.setEncoding('utf-8');

// send a message to the server
connection.write('it is nice to be here');

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for input from stdin
process.stdin.on('data', (data) => {
  connection.write(data.trim());
});

// listen for incoming information
connection.on('data', (data) => {
  console.log('server says:', data);
});

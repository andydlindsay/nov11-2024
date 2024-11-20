const net = require('net');

const server = net.createServer();
const port = 3000;

// create a space to store all connected clients
const connections = [];

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('a client has connected');

  // add the new connection to our connections array
  connections.push(connection);

  // send a welcome message to the connected client
  connection.write('welcome to the chat room');

  // set the encoding on the connection object
  connection.setEncoding('utf-8');

  // listen for the client to send data over
  connection.on('data', (data) => {
    console.log('client says:', data);

    if (data.includes('Move:')) {
      // move the snek in the specified direction
    }

    if (data.includes('Name:')) {
      // set a new name for this connection
      const newName = data.split(':')[1];
      connection.username = newName;
      return;
    }

    // loop through all connections
    for (const conn of connections) {
      // make sure not to send the message back to person we got it from
      if (conn !== connection) {
        // send the data to each connection
        conn.write(`${connection.username} says: ${data}`);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// standard in (stdin) => terminal
// standard out (stdout) => terminal

process.stdin.setEncoding('utf-8');

// Socket
process.stdin.on('data', (data) => {
  console.log('you typed:', data.trim()); 
});

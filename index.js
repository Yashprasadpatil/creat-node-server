const http = require('http');

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, my name is Yash!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

process.on('SIGINT', () => {
    console.log('Server shutting down...');
    server.close(() => {
      console.log('Server stopped');
      process.exit(0); //Exit the Node.js process
    });
  });
  //With this code, you can now gracefully exit the server by pressing Ctrl + C in the terminal where the server is running. The signal handler captures the SIGINT signal sent when Ctrl + C is pressed and initiates the server shutdown process. The server will close existing connections and then stop before the Node.js process exits.
  
  
  
  

 
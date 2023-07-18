// 1. 

// Node.js uses an event-driven architecture in which certain actions, such as reading from a file or receiving a network request, trigger events. These events are handled asynchronously by event listeners, which are functions that are registered to listen for specific events. When an event occurs, all of its registered listeners are called in a non-blocking manner, allowing the program to continue running while the listeners handle the event. This architecture allows Node.js to handle a large number of concurrent connections with a relatively small number of threads, making it well-suited for high-performance, scalable network applications.


//2.

//Node.js is able to handle a large number of concurrent requests even though it uses a single thread by using an event-driven, non-blocking I/O model. In this model, when a request is received, it is passed to a non-blocking function that immediately returns control to the event loop, allowing the program to handle other requests while the first request is being processed. When the response to the first request is ready, an event is triggered, and the appropriate event listener is called to handle it.This allows Node.js to handle many requests simultaneously without creating a separate thread for each one.

//3.

//In Node.js, the process.exit() function is used to exit the current process immediately. When this function is called, the Node.js process will terminate.

//4.

//req.url: This property contains the URL of the requested resource. It includes the path and any query parameters.

//req.headers: This property is an object that contains the headers of the request as key-value pairs. For example, req.headers.accept would contain the value of the "Accept" header(what type of response we accept)

//req.method: This property contains the HTTP method used for the request. Common examples include "GET", "POST", "PUT", and "DELETE".







const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node Js</title></head>');
  
  if (req.url === '/home') {
    res.write('<body><h1>Welcome home</h1></body>');
  } else if (req.url === '/about') {
    res.write('<body><h1>Welcome to About Us page</h1></body>');
  } else if (req.url === '/node') {
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  } else {
    res.write('<body><h1>Page not found</h1></body>');
  }
  
  res.write('</html>');
  res.end();
});

server.listen(4000);



// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
// });

// server.listen(3000);






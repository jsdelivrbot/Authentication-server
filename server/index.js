// Main starting point of the application
// We well do it with ES5 Javascript instead

const express = require('express'); // Equivalent to import
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Creating an express project
const app = express();


// App setup



// Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app); // Create an HTTP server
server.listen(port);
console.log('Server listening on:', port);

// Main starting point of the application
// We well do it with ES5 Javascript instead

const express = require('express'); // Equivalent to import
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
// Creating an express project
const app = express();

// DB Setup

mongoose.connect('mongodb://localhost:auth/auth');

const corsOptions = {origin: "http://localhost:8080", optionsSuccessStatus: 200}
// App setup
// Is middleware in express. Any incoming request is gonna pass into morgan and bodyParser by Default
app.use(morgan('combined')); // morgan is a Logging framework, So you can log all your movements
app.use(bodyParser.json({type: '*/*'})); // Another Middleware that is used to parse incoming requests. Is gonna parser
app.use(cors(corsOptions));
// into json
router(app);
// Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app); // Create an HTTP server
server.listen(port);
console.log('Server listening on:', port);

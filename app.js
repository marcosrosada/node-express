var express = require('express'),
    // chalk = require('chalk'),
    morgan = require('morgan'),
    debug = require('debug')('app'),
    path = require('path');

var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', function(req, res) {
//     res.send('Hello from server');
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen('3000', function() {
    debug('App running on port 3000');
});
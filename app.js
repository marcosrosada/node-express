var express = require('express'),
    // chalk = require('chalk'),
    morgan = require('morgan'),
    debug = require('debug')('app');

var app = express();

app.use(morgan('tiny'));

app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.listen('3000', function() {
    debug('App running on port 3000');
});
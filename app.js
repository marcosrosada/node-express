var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.listen('3000', function() {
    console.log('App running on port 3000');
});
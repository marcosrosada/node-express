const express = require('express');
// const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// app.get('/', function(req, res) {
//     res.send('Hello from server');
// });

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen('3000', () => {
  debug('App running on port 3000');
});

const express = require('express');
// const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs'); // 'pug'
// app.get('/', function(req, res) {
//     res.send('Hello from server');
// });

app.get('/', (_req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', { title: 'Marcos Rosada', list: ['Item A', 'Item B', 'Item C'] });
});

app.listen(port, () => {
  debug(`App running on port ${port}`);
});

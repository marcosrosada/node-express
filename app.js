const express = require('express');
// const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

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

bookRouter.route('/')
  .get((req, res) => {
    res.send('Books');
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Books single');
  });

app.use('/books', bookRouter);

app.get('/', (_req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index',
    {
      title: 'Marcos Rosada',
      nav: [
        { link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }
      ]
    });
});

app.listen(port, () => {
  debug(`App running on port ${port}`);
});

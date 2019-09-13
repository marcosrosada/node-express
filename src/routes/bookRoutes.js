const express = require('express');

const bookRouter = express.Router();
const books = [
  {
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  }
];

bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        title: 'Marcos Rosada',
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        books
      }
    );
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('Single');
  });

module.exports = bookRouter;
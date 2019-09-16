const express = require('express');

const bookRouter = express.Router();
const books = [
  {
    id: 1,
    title: 'Title A',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    id: 2,
    title: 'Title B',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    id: 3,
    title: 'Title C',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    id: 4,
    title: 'Title D',
    genre: 'Historical',
    author: 'Lev',
    read: false
  },
  {
    id: 5,
    title: 'Title F',
    genre: 'Historical',
    author: 'Lev',
    read: false
  }
];

bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'bookListView',
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

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
      'bookView',
      {
        title: 'Marcos Rosada',
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        book: books[id]
      }
    );
  });

module.exports = bookRouter;
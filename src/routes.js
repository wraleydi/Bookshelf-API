const {
    addBook,
    allBooks,
    getBookId,
    editBook,
    deleteBook,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: allBooks
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookId,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBook,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook,
    }
];

module.exports = routes;
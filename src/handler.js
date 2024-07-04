const { nanoid } = require('nanoid');
const books = require('./books');

const addBook = (request, h) => {
    let { 
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload;

    year = parseInt(year, 10);
    pageCount = parseInt(pageCount, 10);
    readPage = parseInt(readPage, 10);

    if (!name){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = {
        id, 
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage, 
        reading, 
        finished, 
        insertedAt, 
        updatedAt
    };

    books.push(newBook);

    const isSuccess = books.filter(book => book.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const allBooks = (request) => {
    const { reading, finished, name  } = request.query;

    let filteredBooks = books;

    if (reading === '1') {
        filteredBooks = filteredBooks.filter(book => book.reading === true);
    } else if (reading === '0') {
        filteredBooks = filteredBooks.filter(book => book.reading === false);
    }

    if (finished === '1') {
        filteredBooks = filteredBooks.filter(book => book.finished === true);
    } else if (finished === '0') {
        filteredBooks = filteredBooks.filter(book => book.finished === false);
    }

    if (name) {
        const searchName = name.toLowerCase(); // Konversi nama pencarian ke lowercase
        filteredBooks = filteredBooks.filter(book =>
            book.name.toLowerCase().includes(searchName)
        );
    }

    return {
        status: 'success',
        data: {
            books: filteredBooks.map(book => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))
        }
    };
};


const getBookId = (request, h) => {
    const { id } = request.params;

    const book = books.find(book => book.id === id);

    if (book) {
        return {
            status: 'success',
            data: {
                book,
            },
        };
    } else {
        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        });
        response.code(404);
        return response;
    }
}

const editBook = (request, h) => {
    const { id } = request.params;
    let { 
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload;

    year = parseInt(year, 10);
    pageCount = parseInt(pageCount, 10);
    readPage = parseInt(readPage, 10);

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    if (!name){
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    const updatedAt = new Date().toISOString();
    const finished = pageCount === readPage;
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            updatedAt
        };
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

const deleteBook = (request, h) => {
    const { id } = request.params;

    const index = books.findIndex(book => book.id === id);
    if (index !== -1){
        books.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

module.exports = {
    addBook,
    allBooks,
    getBookId,
    editBook,
    deleteBook,
};
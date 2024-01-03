const myLibrary = [];

// Create Book objects and add them to myLibrary
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
const book2 = new Book('1984', 'George Orwell', 328, false);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);

myLibrary.push(book1, book2, book3);

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(book) {
    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Argument must be a Book object");
    }
}

function displayBooks() {
    const booksContainer = document.querySelector('.content');
    booksContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">Author: ${book.author}</div>
            <div class="book-pages">Pages: ${book.pages}</div>
            <div class="book-read">Read: ${book.read ? 'Yes' : 'No'}</div>
        `;

        booksContainer.appendChild(bookCard);
    })
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
});

document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);
    displayBooks(); // Update the display

    this.reset();
});
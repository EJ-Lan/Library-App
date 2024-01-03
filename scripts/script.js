// Constructor for Book objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false; // default value
}

// Initialize the library with some books
const myLibrary = [
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, true),
    new Book('1984', 'George Orwell', 328, false),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true)
];

// Add a new book to the library
function addBookToLibrary(book) {
    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Argument must be a Book object");
    }
}

// Toggle the 'read' status of a book
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Delete a book from the library
function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Display all books on the page
function displayBooks() {
    const booksContainer = document.querySelector('.content');
    booksContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">Author: ${book.author}</div>
            <div class="book-pages">Pages: ${book.pages}</div>
            <div class="book-read">Read: ${book.read ? 'Yes' : 'No'}</div>
            <button onclick="toggleReadStatus(${index})" class="read-btn">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button onclick="deleteBook(${index})" class="delete-btn">Delete</button>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// Toggle the dark mode of the page
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// Event listeners
document.addEventListener('DOMContentLoaded', displayBooks);

document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);
    displayBooks();
    this.reset(); // Clear the form
});
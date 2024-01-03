const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Argument must be a Book object");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
const Book = require("./models/Book");
const Member = require("./models/Member");
const library = require("./services/libraryService");

// Create books
const book1 = new Book("JS Guide","Someone",2021);
const book2 = new Book("Node.js","Someone",2022);

// Add books
library.addBook(book1);
library.addBook(book2);

// Create member
const member1 = new Member("Karine",1);
library.addMember(member1);

// Borrow & return
library.borrow("JS Guide",1);
console.log(member1.borrowedBooks.map(b=>b.title));

library.returnBook("JS Guide",1);
console.log(member1.borrowedBooks.map(b=>b.title));

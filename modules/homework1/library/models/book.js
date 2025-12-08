class Book {
    constructor(title, author, year){
      this.title = title;
      this.author = author;
      this.year = year;
      this.isBorrowed = false;
    }
    borrow(){ this.isBorrowed = true; }
    returnBook(){ this.isBorrowed = false; }
  }
  module.exports = Book;
  
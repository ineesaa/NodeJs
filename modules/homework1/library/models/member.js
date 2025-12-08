class Member {
    constructor(name, memberId){
      this.name = name;
      this.memberId = memberId;
      this.borrowedBooks = [];
    }
    borrowBook(book){
      if(!book.isBorrowed){
        book.borrow();
        this.borrowedBooks.push(book);
      }
    }
    returnBook(book){
      book.returnBook();
      this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
  }
  module.exports = Member;
  
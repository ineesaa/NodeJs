const Book = require("../models/Book");
const Member = require("../models/Member");

const books = [];
const members = [];

function addBook(book){ books.push(book); }
function addMember(member){ members.push(member); }
function findBook(title){ return books.find(b => b.title === title); }
function findMember(id){ return members.find(m => m.memberId === id); }
function borrow(title, memberId){
  const book = findBook(title);
  const member = findMember(memberId);
  if(book && member && !book.isBorrowed){
    member.borrowBook(book);
  }
}
function returnBook(title, memberId){
  const book = findBook(title);
  const member = findMember(memberId);
  if(book && member){
    member.returnBook(book);
  }
}

module.exports = { addBook, addMember, findBook, findMember, borrow, returnBook };

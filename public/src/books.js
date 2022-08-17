function findAuthorById(authors, id) {
  return authors.find((author)=> author.id === id);
} 

function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const yetToBeReturned = books.filter((book)=> book.borrows[0].returned === false);
  const returned = books.filter((book)=> book.borrows[0].returned === true);
  return [yetToBeReturned, returned]
}
  
    

function getBorrowersForBook(book, accounts) {
  let array = [];
  const borrowers = book.borrows;
  for (objects in borrowers) {
    const person = borrowers[objects];
    for (object in accounts) {
      const account = accounts[object];
      if (person.id === account.id){
        array.push({...person, ...account});
      }
    }
  }   
if (array.length > 10){
  array = array.slice(0,10);
}
  return array;
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((nameA, nameB)=> nameA.name.last < nameB.name.last ? -1 : 1 );
}

function getTotalNumberOfBorrows(account, books) {
const {
  id: accountId} = account;
  return books.reduce((borrowTotal, book)=> {
    return ( borrowTotal + book.borrows
           .filter(borrow=> borrow.id === accountId)
            .reduce((totalBorrows, borrow)=> totalBorrows +1, 0));
  },0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksCurrentlyInUse = [];
  books.map((book)=> { book.borrows.map((borrow)=> { authors.map((author)=> {
    if (author.id === book.authorId) book["author"] = author;
  });
  if (borrow.returned === false && borrow.id === account.id) {
    booksCurrentlyInUse.push(book);
  }
});
});
  return booksCurrentlyInUse;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

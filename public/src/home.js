const getTotalBooksCount = (books) => books.length;

const getTotalAccountsCount = (accounts) => accounts.length;


function getBooksBorrowedCount(books) {
  let result = books.filter((book)=> book.borrows[0].returned === false)
  return result.length;
}
function getMostCommonGenres(books) {
  const commonGenres = {};
  books.forEach((num)=> {
    if (commonGenres[num.genre]) {
      commonGenres[num.genre]++;
    }else {
      commonGenres[num.genre] = 1;
    }
  });
  return Object.entries(commonGenres)
  .map(([name, count])=> {
    return {
      name,
      count
    };
  })
  .sort((a, b)=> b.count - a.count)
  .slice(0, 5);
  
}
 

function getMostPopularBooks(books) {
  let popularBooks = [];
  const borrows = books.reduce((acc, book) => {
    popularBooks.push({name: book.title, count: book.borrows.length });
  }, []);
  return fivePopular(popularBooks);
}

function fivePopular(list) {
  let popularBooks = list
  
  .sort((count1, count2) => (count1.count < count2.count ? 1 : -1))
  .slice(0, 5);
  
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  let result =[];
  authors.forEach((author)=> {
    let authorName = {name: `${author.name.first} ${author.name.last}`, count: 0};
    books.forEach((book)=> {
      if (book.authorId === author.id) {
        authorName.count += book.borrows.length;
      }
    });
    result.push(authorName);
  });
  return result.sort((a, b)=> b.count - a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

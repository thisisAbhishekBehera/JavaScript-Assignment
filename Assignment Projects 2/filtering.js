function filterAndCapitalizeBooks(books) {
    return books
      .filter(book => book.year >= 2010)
      .map(book => ({
        author: book.author.toUpperCase(),
        title: book.title,
        year: book.year
      }));
  }
  
  // Example usage:
  const books = [
    { author: "john doe", title: "book1", year: 2008 },
    { author: "jane smith", title: "book2", year: 2012 },
    { author: "michael johnson", title: "book3", year: 2005 },
    { author: "emily davis", title: "book4", year: 2015 }
  ];
  
  const filteredBooks = filterAndCapitalizeBooks(books);
  console.log(filteredBooks);
  
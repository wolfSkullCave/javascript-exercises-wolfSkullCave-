console.log('hello')

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.table(books)

const titles = books.map(a => a.title)

console.table(titles)
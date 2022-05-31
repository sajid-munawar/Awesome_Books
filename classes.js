const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('form');

class Books {
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }

    
  
//       static booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
//       console.log(booksFromLocalStorage);
//     if (this.booksFromLocalStorage) {
//    booksContainer.innerHTML = booksFromLocalStorage
//     .map((book) => generateBooks(book))
//     .join('');
//    } else {
//   booksContainer.innerHTML = books.map((book) => generateBooks(book)).join('');
//     }
      
      generateBooks(title , author) {
        return `<ul>
              <li>${this.title}</li>
              <li>${this.author}</li>
              <button>Remove</button>
          </ul><hr>`;
      }


    
    
}

let books = [
    {
      title: 'First Book',
      author: 'foo',
    },
    {
      title: 'Second Book',
      author: 'Testroo testyy',
    },
  ];

let newBooks = new Books('firstBooks' , 'authornv' );
let book1 = newBooks.generateBooks();
console.log(newBooks.addBook);
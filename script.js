

const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('form');

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



 class Books {
  constructor(title , author) {
    this.title = title;
    this.author = author;
  }

   generateBooks({ title, author }) {
    return `<ul>
          <li>${this.title}</li>
          <li>${this.author}</li>
          <button>Remove</button>
      </ul><hr>`;
  }

   addBook (e)  {
    // e.preventDefault();
    this.title = form.title.value.trim();
     this.author = form.author.value.trim();
    if (this.title && this.author) {
      if (booksFromLocalStorage) {
        booksFromLocalStorage.push({title:this.title , author: this.author });
        localStorage.setItem('books', JSON.stringify(booksFromLocalStorage));
        booksContainer.innerHTML = booksFromLocalStorage
          .map((book) => generateBooks(book))
          .join('');
        form.reset();
      } else {
        books.push({title:this.title, author: this.author });
        localStorage.setItem('books', JSON.stringify(books));
        booksContainer.innerHTML = books
          .map((book) => generateBooks(book))
          .join('');
        form.reset();
      }
    }

    return this;
  };

   removeBook(e) {

     
    if (e.target.tagName === 'BUTTON') {
      this.title = e.target.parentElement.firstElementChild.textContent;
  
      if (booksFromLocalStorage) {
        booksFromLocalStorage = booksFromLocalStorage.filter(
          (obj) => obj.title !== this.title,
        );
        localStorage.setItem('books', JSON.stringify(booksFromLocalStorage));
        booksContainer.innerHTML = booksFromLocalStorage
          .map((book) => generateBooks(book))
          .join('');
        form.reset();
      } else {
        books = books.filter((obj) => obj.title !== this.title);
        localStorage.setItem('books', JSON.stringify(books));
        booksContainer.innerHTML = books
          .map((book) => generateBooks(book))
          .join('');
      }
    }
  };
  
}


let booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));

if (booksFromLocalStorage) {
  booksContainer.innerHTML = booksFromLocalStorage
    .map((book) => generateBooks(book))
    .join('');
} else {
  booksContainer.innerHTML = books.map((book) => generateBooks(book)).join('');
}

let bookClass = new Books();
console.log(bookClass);


form.addEventListener('submit', bookClass.addBook());
booksContainer.addEventListener('click', bookClass.removeBook());

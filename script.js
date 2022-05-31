const booksContainer = document.querySelector(".books-container");
const form = document.querySelector('form');

// Create book class, add attributes and methods

class Books {
    
    constructor() {
        this.books = [
            {
                title: 'First Book',
                author: 'foo',
            },
            {
                title: 'Second Book',
                author: 'Testroo testyy',
            },
        ];
    }
    generateBook(book) {
                    return `<ul>
          <li>${book.title}</li>
          <li>${book.author}</li>
          <button>Remove</button>
      </ul><hr>`;
    }
    showBooks() {
        const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
        if (booksFromLocalStorage) {
            this.books=booksFromLocalStorage
            booksContainer.innerHTML = booksFromLocalStorage
                .map((book) => this.generateBook(book))
                .join("");            
        } else {
        localStorage.setItem("books", JSON.stringify(this.books));
        booksContainer.innerHTML = this.books.map(book => this.generateBook(book)).join('');
        }
    }
    updateBooks() {
           const title = form.title.value.trim();
           const author = form.author.value.trim();
           if (title && author) {
             this.books.push({ title, author });
           }
        localStorage.setItem('books', JSON.stringify(this.books));
        this.showBooks()

    }
    removeBook(e) {
        if (e.target.tagName == "BUTTON") {
            const title = e.target.parentElement.firstElementChild.textContent;
            this.books = this.books.filter(obj => obj.title !== title);
        localStorage.setItem("books", JSON.stringify(this.books));
            this.showBooks();
            }
    }
}

// show the Books on UI

let book = new Books()
book.showBooks();

// Add book and update UI as well as localStorage

form.addEventListener('submit', (e) => {
    e.preventDefault();
    book.updateBooks();
    form.reset();
    
})

booksContainer.addEventListener('click', (e) => {
    book.removeBook(e);
})

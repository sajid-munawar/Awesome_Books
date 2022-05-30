const booksContainer = document.querySelector(".books-container");
const add = document.querySelector(".add");
const form = document.querySelector("form");

let books = [
  {
    title: "lorem ipsum",
    author: "foo",
  },
  {
    title: "lorem",
    author: "bar",
  },
];

function generateBooks({ title, author }) {
  return `<ul>
        <li>${title}</li>
        <li>${author}</li>
        <button>Remove</button>
    </ul><hr>`;
}

let booksFromLocalStorage = JSON.parse(localStorage.getItem("books"));

if (booksFromLocalStorage) {
  booksContainer.innerHTML = booksFromLocalStorage
    .map((book) => generateBooks(book))
    .join("");
} else {
  booksContainer.innerHTML = books.map((book) => generateBooks(book)).join("");
}

// booksContainer.innerHTML = books.map(book => generateBooks(book)).join('');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.title.value.trim();
  const author = form.author.value.trim();
  if (title && author) {
    if (booksFromLocalStorage) {
      booksFromLocalStorage.push({ title, author });
      localStorage.setItem("books", JSON.stringify(booksFromLocalStorage));
      booksContainer.innerHTML = booksFromLocalStorage
        .map((book) => generateBooks(book))
        .join("");
      form.reset();
    } else {
      books.push({ title, author });
      localStorage.setItem("books", JSON.stringify(books));
      booksContainer.innerHTML = books
        .map((book) => generateBooks(book))
        .join("");
      form.reset();
    }
  }
});

booksContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const title = e.target.parentElement.firstElementChild.textContent;

    if (booksFromLocalStorage) {
      booksFromLocalStorage = booksFromLocalStorage.filter((obj) => {
        return obj.title !== title;
      });
      localStorage.setItem("books", JSON.stringify(booksFromLocalStorage));
      booksContainer.innerHTML = booksFromLocalStorage
        .map((book) => generateBooks(book))
        .join("");
      form.reset();
    } else {
      books = books.filter((obj) => {
        return obj.title !== title;
      });
      localStorage.setItem("books", JSON.stringify(books));
      booksContainer.innerHTML = books
        .map((book) => generateBooks(book))
        .join("");
    }
  }
});

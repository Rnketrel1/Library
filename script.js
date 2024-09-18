const container = document.querySelector(".container");
const newBook = document.querySelector("#newbook");
const submit = document.querySelector("#submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const formContainer = document.querySelector("#form-container");
//the libary array
const myLibrary = [];

//book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//add it to libary array
function addBookToLibrary() {
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  myLibrary.push(newBook);
  displayBooks();
}

//when click new book, form will popup
newBook.addEventListener("click", function () {
  formContainer.style.display = "block";
});

//the submit button
submit.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
  formContainer.style.display = "none";
});

//makes book appear as grid
function displayBooks() {
  for (let i = myLibrary.length - 1; i === myLibrary.length - 1; i++) {
    const aBook = document.createElement("div");
    aBook.classList.add("abook");
    container.appendChild(aBook);

    const titleText = document.createElement("h4");
    const authorText = document.createElement("p");
    const pageText = document.createElement("p");
    const readText = document.createElement("p");
    const deleteBook = document.createElement("button");
    const changeRead = document.createElement("button");

    titleText.innerText = `${titleInput.value}`;
    authorText.innerText = `${authorInput.value}`;
    pageText.innerText = `${pagesInput.value}`;
    deleteBook.innerText = "Remove";
    changeRead.innerText = "Change read status";

    readText.innerText = readInput.checked ? "Read" : "Not read";

    aBook.appendChild(titleText);
    aBook.appendChild(authorText);
    aBook.appendChild(pageText);
    aBook.appendChild(readText);
    aBook.appendChild(deleteBook);
    aBook.appendChild(changeRead);

    // Delete functionality
    deleteBook.addEventListener("click", function () {
      container.removeChild(aBook);
      myLibrary.splice(i, 1);
    });

    // Change read status functionality
    changeRead.addEventListener("click", function () {
      if (readText.innerText === "Read") {
        readText.innerText = "Not read";
      } else {
        readText.innerText = "Read";
      }
    });
  }
}

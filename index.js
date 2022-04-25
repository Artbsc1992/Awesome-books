import Book from './modules/book.js';
import Books from './modules/books.js';

const div = document.querySelector('.books');
const awesome = document.querySelector('.awesome');
const listBtn = document.getElementById('list');
const formBtn = document.getElementById('add');
const contactBtn = document.getElementById('contact');
const divForm = document.querySelector('.addBook');
const divContact = document.querySelector('.contact');
const bookList = new Books();

const display = (bookObj) => {
  const divList = document.createElement('div');
  divList.classList.add('bookList');
  divList.setAttribute('id', bookObj.id);
  const name = document.createElement('h3');
  name.innerHTML = `"${bookObj.title}" by ${bookObj.author}`;
  const remBtn = document.createElement('button');
  remBtn.classList.add('remBtn');
  remBtn.innerHTML = 'Remove';

  remBtn.addEventListener('click', () => bookList.deleteItem(bookObj.id));

  divList.appendChild(name);
  divList.appendChild(remBtn);
  div.appendChild(divList);
}

const getInput = () => {
  const title = document.querySelector('.inputTitle').value;
  const author = document.querySelector('.inputAuthor').value;
  const book = new Book(title, author);
  document.querySelector('.addBook').reset();
  return book;
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const book = getInput();
  bookList.addBook(book);
  display(book);
});

window.addEventListener('load', () => {
  divForm.classList.add('active');
  bookList.books = JSON.parse(localStorage.getItem('listBooks' || '[]'));
  if (bookList.books === null) {
    bookList.books = [];
    return;
  }
  bookList.books.forEach((book) => display(book));
});

listBtn.addEventListener('click', () => {
  awesome.classList.add('active');
  divForm.classList.remove('active');
  divContact.classList.remove('active');
});

formBtn.addEventListener('click', () => {
  divForm.classList.add('active');
  awesome.classList.remove('active');
  divContact.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
  divContact.classList.add('active');
  divForm.classList.remove('active');
  awesome.classList.remove('active');
});

const today = new Date();

const date = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;

const hours = `${today.getHours()}:${today.getMinutes()}`;

const dateTime = `${date}, ${hours}`;

const time = document.getElementById('date');

time.innerHTML = dateTime;
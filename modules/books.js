export default class Books {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      localStorage.setItem('listBooks', JSON.stringify(this.books));
    }
  
    deleteItem(id) {
      const book = document.getElementById(id);
      book.remove();
      this.books = this.books.filter((bookObj) => bookObj.id !== id);
      localStorage.setItem('listBooks', JSON.stringify(this.books));
    }
  }
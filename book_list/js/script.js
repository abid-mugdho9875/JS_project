//GET UI ELEMENT
let form = document.querySelector('#book_form')
let book_list = document.querySelector('#book_list')


//Book Class
class Book {
    constructor(tittle, author, isbn) {
        this.tittle = tittle;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static   newBook(book) {
        let list = document.querySelector('#book_list');
        let row = document.createElement('tr');
        row.innerHTML =
            `<td>${book.tittle}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>`

        list.appendChild(row)
    }
    static clearFields() {
        document.querySelector('#tittle').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    static showAlert(message,className){
        let div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.container')
        let form = document.querySelector('#book_form')
        container.insertBefore(div,form)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        },3000)
    }
    static deleteFromBook(target){
      if(target.hasAttribute('href')){
          target.parentElement.parentElement.remove()
          UI.showAlert('succesfully removed','success')
          Store.removeBook( target.parentElement.previousElementSibling.textContent.trim())     }
    }
}
//Store 
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = []
        }
        else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }
    static addBooks(book){
        let books = Store.getBooks();
        books.push(book)

        localStorage.setItem('books',JSON.stringify(books))
    }
    static displayBooks(){
        let books = Store.getBooks();
        books.forEach(book => {
            UI.newBook(book)
        })
    }
    static removeBook(isbn){
        let books = Store.getBooks();
        books.forEach((book,index) => {
            if(book.isbn == isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books))
    }
}



//ADD event listener

form.addEventListener('submit', addBook)
book_list.addEventListener('click',removeBook)
document.addEventListener('DOMContentLoaded',Store.displayBooks)




//Function
function addBook(e) {
    let tittle = document.querySelector('#tittle').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
    //calling book function to save data
    let book = new Book(tittle, author, isbn)
    //calling ui function to show output in table
    
    if (tittle == '' || author ==''||isbn =='') {
        UI.showAlert("Please fill required all field","error")
    }
     else {
        UI.newBook(book)
        UI.clearFields()
        Store.addBooks(book)
        UI.showAlert("Succefully submit","success")
    }

    e.preventDefault()
}
function removeBook(e){
    
    UI.deleteFromBook(e.target);
   
}
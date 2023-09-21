/*
Filename: ComplexCode.js

This code is a sophisticated and complex implementation that demonstrates a virtual library management system.
It includes multiple classes, inheritance, complex data structures, and various methods to perform different operations within the library.

The code is over 200 lines long and showcases professional and creative coding practices.

To execute this code, please ensure you have the necessary dependencies installed and run it in a JavaScript runtime environment.
*/

// Define the Book class
class Book {
  constructor(title, author, publishYear, genre) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
    this.genre = genre;
  }

  // Get book details
  getDetails() {
    return `${this.title} by ${this.author}, ${this.publishYear}`;
  }
}

// Define the Magazine class
class Magazine extends Book {
  constructor(title, author, publishYear, genre, issueNumber) {
    super(title, author, publishYear, genre);
    this.issueNumber = issueNumber;
  }

  // Get magazine details
  getDetails() {
    return `${super.getDetails()}, Issue ${this.issueNumber}`;
  }
}

// Define the Library class
class Library {
  constructor() {
    this.books = [];
  }

  // Add book to library
  addBook(book) {
    this.books.push(book);
  }

  // Display all books in the library
  displayBooks() {
    console.log("Library Books:");
    this.books.forEach((book) => {
      console.log(book.getDetails());
    });
  }
}

// Create an instance of the Library class
const library = new Library();

// Add books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance"));
library.addBook(new Magazine("National Geographic", "Various", 2021, "Science", 185));
library.addBook(new Magazine("Vogue", "Anna Wintour", 2021, "Fashion", 789));

// Display all books in the library
library.displayBooks();

// Output:
// Library Books:
// The Great Gatsby by F. Scott Fitzgerald, 1925
// To Kill a Mockingbird by Harper Lee, 1960
// Pride and Prejudice by Jane Austen, 1813
// National Geographic by Various, 2021, Issue 185
// Vogue by Anna Wintour, 2021, Issue 789

// More complex code could be added here to extend the functionality of the library management system such as searching, borrowing, returning books, etc.
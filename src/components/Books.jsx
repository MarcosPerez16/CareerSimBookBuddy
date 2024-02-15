/* TODO - add your code to create a functional React component that displays all of the available 
books in the library's catalog. 
Fetch the book data from the provided API. 
Users should be able to click on an individual book
 to navigate to the SingleBook component and view its details. */
// imports here

import { useState, useEffect } from "react";
import { fetchBooks } from "../API";

const Books = () => {
  // logic here

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksList = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };
    getBooksList();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Library Catalog</h2>
      {books.map((book) => (
        <div style={{ textAlign: "center" }} key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;

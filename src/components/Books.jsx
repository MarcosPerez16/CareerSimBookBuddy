/* TODO - add your code to create a functional React component that displays all of the available 
books in the library's catalog. 
Fetch the book data from the provided API. 
Users should be able to click on an individual book
 to navigate to the SingleBook component and view its details. */
// imports here

import { useState, useEffect } from "react";
import { fetchBooks } from "../API";
import { Link } from "react-router-dom";

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
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {""}
            <br />
            <Link to={`/books/${book.id}`}>See Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

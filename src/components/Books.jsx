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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getBooksList = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };
    getBooksList();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-container">
      <h2 className="catalog-title">Library Catalog</h2>

      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="books-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            {book.title}
            <br />
            <Link to={`/books/${book.id}`} className="details-link">
              See Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

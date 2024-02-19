// imports here

import { useState, useEffect } from "react";
import {
  checkoutBook,
  fetchBooks,
  fetchCheckedOutBooks,
  returnBook,
} from "../API";
import CheckoutBook from "./CheckoutBook";

const ReturnBook = ({ token }) => {
  // logic here

  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { reservation: books } = await fetchCheckedOutBooks(token);

        setCheckedOutBooks(books);
      } catch (error) {
        console.error("Error fetching checked-out books:", error.message);
      }
    };

    if (token) {
      fetchBooks();
    }
  }, [token]);

  //handle return function
  const handleReturn = async (bookId) => {
    try {
      await returnBook(token, bookId);

      //update state after returning the book
      setCheckedOutBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== bookId)
      );
    } catch (error) {
      console.error("Return failed: ", error.message);
    }
  };

  //handle checkout function
  const handleCheckout = async (bookId) => {
    try {
      await checkoutBook(token, bookId);

      //fetch and update list of checked out books after checkout
      const { reservation: books } = await fetchCheckedOutBooks(token);
      setCheckedOutBooks(books);
    } catch (error) {
      console.error("Checkout failed:", error.message);
    }
  };

  return (
    <div className="return-book-container">
      <h2>Checked out Books/Return Book</h2>
      <ul className="book-list">
        {checkedOutBooks.map((book) => (
          <li key={book.id} className="book-list-item">
            {book.title} by {book.author}
            <button
              className="return-button"
              onClick={() => handleReturn(book.id)}
            >
              Return
            </button>
          </li>
        ))}
      </ul>

      <CheckoutBook token={token} handleCheckout={handleCheckout} />
    </div>
  );
};

export default ReturnBook;

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
        console.log("checked out books:", books);
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
    console.log("Returning book with ID:", bookId);
    try {
      await returnBook(token, bookId);

      //update state after returning the book
      setCheckedOutBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== bookId)
      );

      // Optionally, provide feedback to the user (e.g., display a success message)
      console.log("Book returned successfully");
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

      console.log("Book checked out successfully");
    } catch (error) {
      console.error("Checkout failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <p>Books currently checked out:</p>
      <ul>
        {checkedOutBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleReturn(book.id)}>Return</button>
          </li>
        ))}
      </ul>

      {/* Include Checkout functionality here */}
      <CheckoutBook token={token} handleCheckout={handleCheckout} />
    </div>
  );
};

export default ReturnBook;

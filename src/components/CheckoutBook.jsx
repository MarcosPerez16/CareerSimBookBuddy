// imports here
import { useState, useEffect } from "react";
import { fetchBooks, checkoutBook } from "../API";

const CheckoutBook = ({ token, handleCheckout }) => {
  // logic here
  const [availableBooks, setAvailableBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    const fetchAvailableBooks = async () => {
      try {
        const books = await fetchBooks();
        setAvailableBooks(books);
      } catch (error) {
        console.error("Error fetching available books:", error.message);
      }
    };
    fetchAvailableBooks();
  }, []);

  const handleCheckoutClick = async () => {
    if (!selectedBook) {
      console.error("Please select a book to checkout");
      return;
    }

    try {
      await handleCheckout(selectedBook.id);
      //update checkout state
      setCheckoutSuccess(true);

      console.log(`Book "${selectedBook.title}" checked out successfully!`);
    } catch (error) {
      console.error("Checkout failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Checkout Book</h2>
      {checkoutSuccess && (
        <p style={{ color: "blue" }}>Book successfully checked out!</p>
      )}
      <p>Select a book to checkout:</p>
      <select onChange={(e) => setSelectedBook(JSON.parse(e.target.value))}>
        <option value="">Select a book</option>
        {availableBooks.map((book) => (
          <option key={book.id} value={JSON.stringify(book)}>
            {book.title}
          </option>
        ))}
      </select>
      <button onClick={handleCheckoutClick}>Checkout</button>
    </div>
  );
};

export default CheckoutBook;

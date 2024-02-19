/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. 
 You may consider conditionally rendering a 'Checkout' button for logged in users. */

// imports here
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleBook } from "../API";

const SingleBook = () => {
  // logic here
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getSingleBook = async () => {
      const singleBookData = await fetchSingleBook(id);
      setBook(singleBookData);
    };
    getSingleBook();
  }, [id]);

  return (
    <div className="single-book-container">
      <h2>Book Details</h2>

      <p>
        <span style={{ color: "blue" }}>ID:</span> {book.id}
      </p>
      <p>
        <span style={{ color: "green" }}>Title:</span> {book.title}
      </p>
      <p>
        <span style={{ color: "red" }}>Author:</span> {book.author}
      </p>
      <p>
        <span style={{ color: "purple" }}>Description:</span> {book.description}
      </p>

      <p>
        <img src={book.coverimage} alt={book.title} />
      </p>
      <p>
        <span style={{ color: "red" }}>Availability:</span>{" "}
        {book.available ? "Available" : "Checked Out"}
      </p>
    </div>
  );
};

export default SingleBook;

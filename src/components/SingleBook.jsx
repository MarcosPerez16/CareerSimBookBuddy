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
    <div>
      <h2>This will show the details of a single book</h2>

      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>
        Cover Image: <img src={book.coverimage} alt={book.title} />
      </p>
      <p>Availability: {book.available ? "Available" : "Checked Out"}</p>
    </div>
  );
};

export default SingleBook;

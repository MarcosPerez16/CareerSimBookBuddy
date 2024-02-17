import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route } from "react-router-dom";
import {
  Navigations,
  Books,
  SingleBook,
  Account,
  Login,
  Register,
} from "./components";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <Navigations token={token} />

      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="books/:id" element={<SingleBook />}></Route>
        <Route path="/account" element={<Account token={token} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      {/* <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p> */}
    </>
  );
}

export default App;

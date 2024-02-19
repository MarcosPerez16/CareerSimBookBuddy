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
  CheckoutBook,
  ReturnBook,
} from "./components";
import "./index.css";
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <Navigations token={token} />

      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="books/:id" element={<SingleBook />}></Route>
        <Route path="/account" element={<Account token={token} />}></Route>
        <Route path="/login" element={<Login setToken={setToken} />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;

/* TODO - add your code to create a functional React component that renders a navigation bar 
for the different views in your single page application. 
You may consider conditionally rendering some options - 
for example 'Login' should be available if someone has not logged in yet. */

// imports here
import { Link, useNavigate } from "react-router-dom";

const Navigations = ({ token }) => {
  // logic here

  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">
        <span className="material-icons">home</span> Books
      </Link>

      <Link to="/login">
        <span className="material-icons">login</span> Login
      </Link>

      <Link to="/register">
        <span className="material-icons">app_registration</span> Register
      </Link>

      <Link to="/account">
        <span className="material-icons">account_box</span> Account
      </Link>
    </nav>
  );
};

export default Navigations;

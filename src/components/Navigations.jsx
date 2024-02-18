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
      <Link to="/">Books</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/account">Account</Link>
    </nav>
  );
};

export default Navigations;

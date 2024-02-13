/* TODO - add your code to create a functional React component that renders a navigation bar 
for the different views in your single page application. 
You may consider conditionally rendering some options - 
for example 'Login' should be available if someone has not logged in yet. */

// imports here
import { Link } from "react-router-dom";

const Navigations = () => {
  // logic here
  return (
    <nav>
      <Link to={"/"}>Books</Link>
      <Link to={"/account"}>Account</Link>
    </nav>
  );
};

export default Navigations;

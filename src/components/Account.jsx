/* TODO - add your code to create a functional React component that renders account details 
for a logged in user. Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that 
prompts them to log in or create an account.  */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { fetchUserDetails } from "../API";
import CheckoutBook from "./CheckoutBook";
import ReturnBook from "./ReturnBook";

// imports here
const Account = ({ token, setToken }) => {
  // logic here

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUserDetails(token);
        setUserDetails(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      {/* Your existing account details rendering goes here */}
      {userDetails ? (
        <>
          <h3>
            Welcome, {userDetails.firstname} {userDetails.lastname}!
          </h3>
          <p>Email: {userDetails.email}</p>

          {/* Display CheckoutBook only when the user is logged in */}
          {token && <ReturnBook token={token} />}
        </>
      ) : (
        <p>Please log in to view your account details.</p>
      )}
    </div>
  );
};

export default Account;

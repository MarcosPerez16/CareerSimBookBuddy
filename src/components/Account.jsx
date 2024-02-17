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

// imports here
const Account = ({ token }) => {
  // logic here

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
          <h3>Welcome, {userDetails.firstname}!</h3>
          <p>Email: {userDetails.email}</p>
          {/*can add more details as needed */}
        </>
      ) : (
        <p>Please log in to view your account details.</p>
      )}

      {/* Conditionally render Login/Register links based on user's state */}
      {!userDetails && (
        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Account;

/* TODO - add your code to create a functional React component that renders a login form */

// imports here

import { useState } from "react";
import { loginUser } from "../API";
import { useNavigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  // logic here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setErrorMessage("Please enter both email and password");
        return;
      }

      //clears any previous error message
      setErrorMessage("");

      const userData = await loginUser({ email, password });
      //successful login
      console.log("User logged in successfully:", userData);

      //after successful login navigate to account page
      navigate("/account");

      //save users token to state
      setToken(userData.token);
    } catch (error) {
      setErrorMessage(`Login failed: ${error.message}`);
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {token && <p>User token: {token}</p>}
    </div>
  );
};

export default Login;

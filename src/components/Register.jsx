/* TODO - add your code to create a functional React component that renders a registration form */
// imports here

import { useState } from "react";
import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // logic here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        setError("You must enter both an email and password!");
        return;
      }

      const userData = await registerUser({ email, password });
      console.log("User registered successfully:", userData);

      //redirect the registered user to login page
      navigate("/login");

      //reset error state after successful registration
      setError(null);
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
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

      <button onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;

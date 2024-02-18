/* TODO - add your code to create a functional React component that renders a registration form */
// imports here

import { useState } from "react";
import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // logic here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (!email || !password || !firstname || !lastname) {
        setError("Please fill in all fields");
        return;
      }

      const userData = await registerUser({
        email,
        password,
        firstname,
        lastname,
      });
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

      <label>First Name:</label>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label>Last Name:</label>
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;

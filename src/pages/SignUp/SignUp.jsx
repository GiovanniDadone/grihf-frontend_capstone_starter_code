import React, { useState } from "react";
import RoleSelection from "../../components/RoleInput";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between true and false
  };

  // Handles role change
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new user object with all input data
    const newUser = {
      role: role,
      username: username,
      phone: phone,
      email: email,
      password: password,
      isLoggedIn: false,
    };

    try {
      // Make a POST request to json-server to add new user to the loginform array
      const response = await fetch("http://localhost:3000/loginform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser), // Send the newUser object as JSON
      });

      if (response.ok) {
        const data = await response.json();
        alert("User added successfully");
        console.log("User added:", data); // You can handle success here (e.g., show a success message)
      } else {
        console.error("Error adding user:", response.statusText); // Handle server errors
      }
    } catch (error) {
      console.error("Error sending data:", error); // Handle fetch error
    }
  };

  return (
    <div className="signup-container">
      <p>
        Are you already a member? <NavLink to="/login">Log In</NavLink>
      </p>

      <form
        onSubmit={handleSubmit} // Form submit handler
        className="signup-form"
      >
        <RoleSelection role={role} handleRoleChange={handleRoleChange} />
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Store username in state
        />
        <input
          className="signup-input"
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Store phone number in state
        />
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Store email in state
        />
    <div className="password-input">
      <input
        className="signup-input"
        type={showPassword ? "text" : "password"} // Toggle input type between "password" and "text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Store password in state
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>{" "}
        {/* Submit the form */}
      </form>
    </div>
  );
};

export default SignUp;

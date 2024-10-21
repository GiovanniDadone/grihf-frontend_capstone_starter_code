import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    fetch("http://localhost:3000/loginform")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const user = data.find((user) => user.email === email && user.password === password);
        if (user) {
          const updatedUser = { ...user, isLoggedIn: true };
          return fetch(`http://localhost:3000/loginform/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then(() => {
        alert("Login successful!");
        window.location.reload();
        console.log("User logged in successfully");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="login-container">
      <p>
        Not a member? <NavLink to="/signup">Sign Up</NavLink>
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <input className="login-input" type="email" placeholder="Email" required name="email" />
        <input className="login-input" type="password" placeholder="Password" required name="password" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

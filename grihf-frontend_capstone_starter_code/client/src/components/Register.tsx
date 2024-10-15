import React from "react";
import { RegisterProps } from "../App";

const Register: React.FC<RegisterProps> = ({
  username,
  password,
  email,
  setUsername,
  setPassword,
  setEmail,
  setIsLoggedIn,
}) => {
  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create user object
    const user = { username, password, email };

    // Store user object in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the home page after registration
  };

  const submitNavigate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister(event);
    setIsLoggedIn(false);
  };

  return (
    <form onSubmit={submitNavigate}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

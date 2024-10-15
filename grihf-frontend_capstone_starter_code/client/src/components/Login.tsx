import React from "react";
import { LoginProps } from "../types";

const UserForm: React.FC<LoginProps> = ({
  username,
  password,
  setUsername,
  setPassword,
  isLoggedIn,
  email,
  setEmail,
  handleLogin,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const submitNavigate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(isLoggedIn);
    handleLogin(event);
  };

  return (
    <div>
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
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;

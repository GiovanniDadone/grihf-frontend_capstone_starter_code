import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Appointments from "./components/Appointments";
import HealthBlog from "./components/Healthblog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const checkUser = (
    inputUsername: string,
    inputPassword: string,
    inputEmail: string
  ) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return false;
    }

    const { username, password, email } = JSON.parse(storedUser);

    return (
      username === inputUsername &&
      password === inputPassword &&
      email === inputEmail
    );
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidUser = checkUser(username, password, email);
    if (isValidUser) {
      setIsLoggedIn(true);
      console.log("Login successful!");
    } else {
      console.log("Invalid username, password, or email.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create user object
    const user = { username, password, email };

    // Store user object in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Clear input fields after storing
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Redirect to the login page
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <div>
          <Link
            className="no_underline"
            to="/">
            Home
          </Link>
        </div>
        <div>
          <Link
            className="no_underline"
            to="/appointments">
            Appointments
          </Link>
        </div>
        <div>
          <Link
            className="no_underline"
            to="/healthblog">
            Health Blog
          </Link>
        </div>
        <div>
          <Link
            className="no_underline"
            to="/reviews">
            Reviews
          </Link>
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link
              className="no_underline"
              to="/login">
              Login
            </Link>
            <Link
              className="no_underline"
              to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} />}></Route>
        <Route
          path="/appointments"
          element={<Appointments />}></Route>
        <Route
          path="/healthblog"
          element={<HealthBlog />}></Route>
        <Route
          path="/reviews"
          element={<Reviews />}></Route>
        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              setIsLoggedIn={setIsLoggedIn}
              setEmail={setEmail}
              email={email}
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
            />
          }></Route>
        <Route
          path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
              setIsLoggedIn={setIsLoggedIn}
            />
          }></Route>
      </Routes>
    </Router>
  );
};
export default App;

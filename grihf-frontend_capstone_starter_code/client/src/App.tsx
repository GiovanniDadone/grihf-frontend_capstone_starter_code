import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Appointments from "./components/Appointments";
import HealthBlog from "./components/Healthblog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import Register from "./components/Register";

export interface LoginProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export interface RegisterProps {
  username: string;
  password: string;
  email: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create user object
    const user = {
      username,
      password,
    };
    console.log(user);

    // Store user object in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Optionally clear the form
    setUsername("");
    setPassword("");

    // Redirect to home after storing user
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
          element={<Home />}></Route>
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
            />
          }></Route>
      </Routes>
    </Router>
  );
};

export default App;

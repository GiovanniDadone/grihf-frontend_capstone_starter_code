import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AuthButtons.css";

const AuthButtons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch the login status from the server
  useEffect(() => {
    fetch("http://localhost:3000/loginform")
      .then((response) => response.json())
      .then((data) => {
        const loggedInUser = data.find((user) => user.isLoggedIn === true);
        if (loggedInUser) {
          const username = loggedInUser.username;
          console.log(username);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching login status:", error);
      })
      .finally(() => {
        console.log("Loading complete");
      });
  });

  const handleLogout = () => {
    fetch("http://localhost:3000/loginform")
      .then((response) => response.json())
      .then((users) => {
        const loggedInUser = users.find((user) => user.isLoggedIn === true);

        if (loggedInUser) {
          const updatedUser = { ...loggedInUser, isLoggedIn: false };

          return fetch(`http://localhost:3000/loginform/${loggedInUser.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });
        } else {
          throw new Error("No logged-in user found");
        }
      })
      .then(() => {
        setIsLoggedIn(false);
        window.location.reload();
        console.log("Logout successful");
        // Update your local state or context here
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div>
      {isLoggedIn ? (
        <NavLink to="/">
          <button className="authbuttons" onClick={handleLogout}>
            Logout
          </button>
        </NavLink>
      ) : (
        <div>
          <NavLink to="login">
            <button className="authbuttons">Login</button>
          </NavLink>
          <NavLink to="signup">
            <button className="authbuttons">Sign Up</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;

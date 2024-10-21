import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";
import "./Navbar.css";
import { useState, useEffect } from "react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import ProfileName from "../ProfileName";
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/loginform")
      .then((response) => response.json())
      .then((data) => {
        const loggedInUser = data.find((user) => user.isLoggedIn === true);
        if (loggedInUser) {
          const username = loggedInUser.username;
          console.log(username);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching login status", error);
      });
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div className="navbar">
          <h2>StayHealthy</h2><img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/apache-answer.svg" alt="logo" className="logo" />
          <div className="nav-items">
            <NavLink to="/"><p>Home</p></NavLink>
            <NavLink to="/appointments"><p>Appointments</p></NavLink>
            <NavLink to="/reviews"><p>Reviews</p></NavLink>
            <NavLink to="/healthblog"><p>Health Blog</p></NavLink>
          </div>
          <ProfileMenu />
          <AuthButtons navigate={navigate} />
        </div>
      ) : (
        <div className="navbar">
          <h2>StayHealthy</h2><img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/apache-answer.svg" alt="logo" className="logo" />
          <div className="nav-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Appointments</NavLink>
            <NavLink to="/">Reviews</NavLink>
            <NavLink to="/healthblog">Health Blog</NavLink>
          </div>
          <ProfileName />
          <AuthButtons navigate={navigate} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

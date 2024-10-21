import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Panels.css";

const Panels = () => {
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
        }
      })
      .catch((error) => {
        console.error("Error fetching login status:", error);
      })
      .finally(() => {
        console.log("Loading complete");
      });
  });


  return (
    <div>
      {isLoggedIn ? (
        <div className="panel-container">
          <NavLink to="/instantappointments">
            <div className="panel">Instant Consultation</div>
          </NavLink>
          <NavLink to="/appointments">
            <div className="panel">Book an Appointment</div>
          </NavLink>
          <NavLink to="/selfcheckup">
            <div className="panel">Self Check-Up</div>
          </NavLink>
          <NavLink to="/healthblog">
            <div className="panel">HealthBlog</div>
          </NavLink>
        </div>
      ) : (
        <div className="panel-container">
          <NavLink to="/login">
            <div className="panel">Instant Consultation</div>
          </NavLink>
          <NavLink to="/login">
            <div className="panel">Book an Appointment</div>
          </NavLink>
          <NavLink to="/selfcheckup">
            <div className="panel">Self Check-Up</div>
          </NavLink>
          <NavLink to="/healthblog">
            <div className="panel">HealthBlog</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Panels;

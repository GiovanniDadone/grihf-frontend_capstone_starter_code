import React, { useState, useEffect,useRef } from 'react';
import './ProfileMenu.css'; // Optional: Include a CSS file for styling
import { NavLink } from 'react-router-dom';

function ProfileMenu() {
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility
  const ref = useRef(null); // Create a ref to store the component's DOM element

  const handleClickOutside = (event) => {
    // Check if the click was outside the component
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the component if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

  }); // Empty dependency array ensures this runs once on mou

  useEffect(() => {
    fetch('http://localhost:3000/loginform')
      .then(response => response.json())
      .then(users => {
        const loggedInUser = users.find(user => user.isLoggedIn === true);
        if (loggedInUser) {
          setLoggedInUsername(loggedInUser.username);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      {loggedInUsername && (
        <div>
          <button className='profilebutton' onClick={toggleDropdown}>Welcome, {loggedInUsername}</button>
          {isDropdownOpen && (
            <div ref={ref} className="dropdown-menu">
              <ul>
               <NavLink to="/profile"><li>Profile</li></NavLink>
                <NavLink to="/reports"><li>Reports</li></NavLink>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;

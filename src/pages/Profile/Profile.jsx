import React, { useState, useEffect } from "react";
import './Profile.css';

const Profile = () => {
  const [loginForm, setLoginForm] = useState([]);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState(true);

  const handleFormChange = () => {
    setValue(false); // This will set the value to 'true'
  };

  const closeForm = () => {
    setValue(false);
    window.location.reload();
  };

  // Fetch the loginForm data when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/loginform")
      .then((response) => response.json())
      .then((data) => setLoginForm(data))
      .catch((error) => console.error("Error fetching loginForm data:", error));
  }, []);

  const handleUpdate = () => {
    // Find the object with isLoggedIn set to true
    const loggedInUser = loginForm.find((user) => user.isLoggedIn === true);

    if (loggedInUser) {
      // Update the username and phone values
      const updatedUser = { ...loggedInUser, username, phone };

      // Make a PUT request to update the user on the server
      fetch(`http://localhost:3000/loginform/${loggedInUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((response) => {
          if (response.ok) {
            // Update the loginForm state with the new data
            alert("User updated successfully!");
            setLoginForm((prevForm) => prevForm.map((user) => (user.id === loggedInUser.id ? updatedUser : user)));
            closeForm();
            console.log("User updated successfully!");
          } else {
            console.error("Error updating user:", response.statusText);
          }
        })
        .catch((error) => console.error("Error during PUT request:", error));
    } else {
      console.log("No user is currently logged in.");
    }
  };

  return (
    <div className="profilechange">
      <h2>Change your username and phone number</h2>
      {value ? (
        <div className="profilecontainer">
          <div>
            <label>Name: </label>
            <input type="text" value={username} disabled />
          </div>
          <div>
            <label>Phone: </label>
            <input type="text" value={phone} disabled />
          </div>
          <button onClick={handleFormChange}>Update User</button>
        </div>
      ) : (
        <div className="profilecontainer">
          <div>
            <label>Name: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
          </div>
          <div>
            <label>Phone: </label>
            <input type="text" value={phone} pattern="\d{10}" onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <button onClick={handleUpdate}>Submit Update</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

import React, { useState, useEffect } from "react";
import "./Reviews.css";

const ReviewsFinal = () => {
  const [appointments, setAppointments] = useState([]);
  const [reviewInput, setReviewInput] = useState({});
  const [isReviewing, setIsReviewing] = useState({});

  // Fetch appointments from the backend
  useEffect(() => {
    fetch("http://localhost:3000/instantappointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  // Toggle between showing and hiding the review form
  const toggleReviewForm = (id) => {
    setIsReviewing((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle review input change
  const handleReviewChange = (e, id) => {
    setReviewInput((prev) => ({ ...prev, [id]: e.target.value }));
  };

  // Update appointment with review and isReviewed = true
  const handleSubmitReview = (id) => {
    const updatedAppointment = appointments.find((appt) => appt.id === id);
    if (updatedAppointment) {
      const updatedData = {
        ...updatedAppointment,
        review: reviewInput[id] || "",
        isReviewed: true,
      };

      // Send PUT request to update appointment
      fetch(`http://localhost:3000/instantappointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => {
          if (response.ok) {
            // Update the appointments state
            setAppointments((prev) => prev.map((appt) => (appt.id === id ? updatedData : appt)));
            // Hide the review form after submission
            setIsReviewing((prev) => ({ ...prev, [id]: false }));
            console.log("Review updated successfully");
          } else {
            console.error("Error updating review:", response.statusText);
          }
        })
        .catch((error) => console.error("Error during PUT request:", error));
    }
  };

  // Cancel (delete) an appointment
  const handleCancelAppointment = (id) => {
    fetch(`http://localhost:3000/instantappointments/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the appointment from the local state
          setAppointments((prev) => prev.filter((appt) => appt.id !== id));
          setIsReviewing(false);
          console.log("Appointment cancelled successfully");
        } else {
          console.error("Error cancelling appointment:", response.statusText);
        }
      })
      .catch((error) => console.error("Error during DELETE request:", error));
  };

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <div className="review-card " key={appointment.id}>
          <p>
            <strong>Dr:</strong> {appointment.itemname}
          </p>
          <p>
            <strong>Specialization:</strong> {appointment.itemspecialization}
          </p>

          {isReviewing[appointment.id] ? (
            <div>
              <input type="text" value={reviewInput[appointment.id] || ""} onChange={(e) => handleReviewChange(e, appointment.id)} placeholder="Write your review here" />
              <button onClick={() => handleSubmitReview(appointment.id)}>Submit Review</button>
            </div>
          ) : (
            <button onClick={() => toggleReviewForm(appointment.id)} disabled={!isReviewing}>Give a Review</button>
          )}
          <p>
            <strong>Review:</strong> {appointment.review || "No review yet"}
          </p>
          {/* Cancel button */}
          <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default ReviewsFinal;

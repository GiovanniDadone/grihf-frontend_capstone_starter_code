import React, { useState, useEffect } from "react";
import "./AppointmentNotification.css";

const AppointmentNotification = () => {
  const [appointments, setAppointments] = useState([]); // State to hold appointments
  const [name, setName] = useState("");
  const [cause, setCause] = useState("");
  const [date, setDate] = useState("");
  const [itemname, setItemname] = useState("");
  const [itemspecialization, setItemspecialization] = useState("");

  // Fetch appointments from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/appointments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data); // Set the fetched appointments into state
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []); // Empty dependency array means this runs once on mount

  // Fetch the first appointment and set state if appointments array is not empty
  useEffect(() => {
    if (appointments.length > 0) {
      const firstAppointment = appointments[0];
      setName(firstAppointment.name);
      setCause(firstAppointment.cause);
      setDate(firstAppointment.date);
      setItemname(firstAppointment.itemname);
      setItemspecialization(firstAppointment.itemspecialization);
    }
  }, [appointments]); // This runs every time appointments changes

  return (
    <div className="appointment-notification">
      {appointments.length > 0 ? (
        <div>
          <h1>Appointment Details</h1>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Cause:</strong> {cause}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Item Name:</strong> {itemname}
          </p>
          <p>
            <strong>Item Specialization:</strong> {itemspecialization}
          </p>
        </div>
      ) : (
        <p className="invisible">No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentNotification;

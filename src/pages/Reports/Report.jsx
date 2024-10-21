import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import './Report.css';

const GeneratePdf = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from json-server
  useEffect(() => {
    fetch('http://localhost:3000/instantappointments')
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  // Function to generate PDF for a specific appointment
  const generatePdfForAppointment = (appointment) => {
    const doc = new jsPDF();

    // Add appointment data to the PDF
    doc.setFontSize(16);
    doc.text('Instant Appointment', 10, 10);
    doc.setFontSize(12);
    doc.text(`ID: ${appointment.id}`, 10, 20);
    doc.text(`Name: ${appointment.name}`, 10, 30);
    doc.text(`Cause: ${appointment.cause}`, 10, 40);
    doc.text(`Doctor: ${appointment.itemname}`, 10, 50);
    // Save the PDF
    doc.save(`appointment_${appointment.name}.pdf`);
  };

  return (
    <div className='reports'>
      <h2>Generate Reports in Pdf from Appointments</h2>

      <h3>Appointments:</h3>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
              <p>Dr.: <strong>{appointment.itemname}</strong>, Specialization:<strong>{appointment.itemspecialization}</strong>, Patient Name: <strong>{appointment.name}</strong> for {appointment.cause}</p>

          {/* Button to generate PDF for this specific appointment */}
          <button onClick={() => generatePdfForAppointment(appointment)}>
            Print PDF for {appointment.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GeneratePdf;

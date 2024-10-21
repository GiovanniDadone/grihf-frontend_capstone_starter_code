import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import AppointmentNotification from "../components/AppointmentNotification/AppointmentNotification";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <AppointmentNotification />
    </div>
  );
};
export default RootLayout;

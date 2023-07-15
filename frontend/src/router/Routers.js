import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Register from "../pages/Register";

function Routers(props) {
  return (
    <Routes>
      <Route path="" element={<Home />} />{" "}
      <Route path="home" element={<Home />} />{" "}
      <Route path="tour" element={<Tours />} />{" "}
      <Route path="tour/:id" element={<TourDetails />} />{" "}
      <Route path="login" element={<Login />} />{" "}
      <Route path="register" element={<Register />} />{" "}
    </Routes>
  );
}

export default Routers;

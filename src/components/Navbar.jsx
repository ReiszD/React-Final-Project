import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/movie_night.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="navbar">
        <img src={logo} alt="" className="navbar__logo" />
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/media")}>Find Your Movie/TV Show</li>
          <li>Request Movie/Show</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

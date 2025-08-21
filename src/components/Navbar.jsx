import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/movie_night.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

  return (
    <div className="nav">
      <div className="navbar">
        <img src={logo} alt="" className="navbar__logo" />
        <ul>
          <li>Home</li>
          <li>Find Your Movie/TV Show</li>
          <li>Request Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

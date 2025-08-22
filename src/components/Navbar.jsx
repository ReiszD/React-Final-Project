import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/movie_night.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const notify = () => toast("Still gotta build");

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav">
      <div className="navbar">
        <img src={logo} alt="" className="navbar__logo" />
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/media")}>Find Your Movie/TV Show</li>
          <li onClick={notify}>Request Movie/Show</li>
          <ToastContainer theme="dark" />
        </ul>
      </div>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="film" />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="xmark" />
          </button>
          <ul className="menu__links">
            <li onClick={() => navigate("/")} className="menu__link">Home</li>
            <li onClick={() => navigate("/media")} className="menu__link">Find Your Movie/TV Show</li>
            <li onClick={notify} className="menu__link">Request Movie/TV Show</li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;

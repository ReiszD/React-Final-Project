import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import movie_poster from "../assets/movie-poster.jpg";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="search__media">
          <h2 className="home__title">Find Your Perfect Movie</h2>

          <input
            className="search__input"
            type="search"
            placeholder="Search For Movies or Shows Here"
          />
          
          <FontAwesomeIcon
            icon="magnifying-glass"
            className="search__btn"
            onClick={() => navigate("/media")}
            />
            
        </div>
        <img src={movie_poster} alt="" className="background__img" />

        <div className="media__btn">
          <Link to="/media">
            <button className="btn">Browse Collection</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

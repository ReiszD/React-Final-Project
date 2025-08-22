import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import movie_poster from "../assets/movie-poster.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h2 className="home__title">Movie Information Database</h2>
        <img src={movie_poster} alt="" className="background__img" />
        <Link to="/media">
          <button className="btn">Browse Collection</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

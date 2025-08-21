import React, { useEffect, useState } from "react";
import "./MediaCards.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import gg_poster from "../assets/gg_poster.jpg";

const MediaCards = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMedia(imdbID) {
    if (!imdbID) return; // Prevent searching with an empty string

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=253f9b44`
      );
    } catch (error) {
      console.error("Error fetching media:", error);
      setMovies([]);
    }
  }

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Link to="/media">
            <button className="back__icon">
              <FontAwesomeIcon icon="arrow-left" />
            </button>
          </Link>
          {movies.map((movie) => (
            <div className="media__selected" key={movie.imdbID}>
              <figure className="media__selected--img">
                <img src={movie.Poster} alt="" className="media__img" />
              </figure>
              <div className="media__selected--description">
                <h2 className="media__title">{movie.Title}</h2>
                <p className="media__actors">{movie.Actors}</p>
                <p className="media__plot">{movie.Plot}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaCards;

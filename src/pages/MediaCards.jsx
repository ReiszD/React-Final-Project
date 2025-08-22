import React, { useEffect, useState } from "react";
import "./MediaCards.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const MediaCards = () => {
  const [movies, setMovies] = useState([]);
  const { imdbID } = useParams();

  async function fetchMedia() {
    if (!imdbID) return;

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=253f9b44`
      );
      console.log(data);
      setMovies(data)
    } catch (error) {
      console.error("Error fetching media:", error);
      setMovies([]);
    }
  }

  useEffect(() => {
    fetchMedia();
  }, [imdbID]);

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
            
          <div className="media__selected" key={movies.imdbID}>
            <figure className="media__selected--img">
              <img src={movies.Poster} alt="" className="media__img" />
            </figure>
            <div className="media__selected--description">
              <h2 className="media__title">{movies.Title}</h2>
              <p className="media__actors">{movies.Actors}</p>
              <p className="media__plot">{movies.Plot}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaCards;

import React, { useEffect, useState } from "react";
import "./Media.css";
import Navbar from "../components/Navbar";
import movie_banner from "../assets/movie_banner.avif";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Media = () => {
  const [movies, setMovies] = useState();

  const [searchTitle, setSearchTitle] = useState();

  // const [medias, setMedias] = useState([]);

  function onSearch() {
    fetchMedia(searchTitle);
  }

  function filterMovies(filter) {
    console.log(filter);
    if (filter === "OLD_TO_NEW") {
      setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
    }
    if (filter === "NEW_TO_OLD") {
      setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === "MOVIES_TO_SERIES") {
      setMovies(
        movies
          .slice()
          .sort((a, b) => a.Type.localeCompare - b.Type.localeCompare)
      );
    }
    if (filter === "SERIES_TO_MOVIES") {
      setMovies(
        movies
          .slice()
          .sort((a, b) => b.Type.localeCompare - a.Type.localeCompare)
      );
    }
    if (filter === "TITLE")
      setMovies(
        movies
          .slice()
          .sort((a, b)(a.Title.localeCompare) - b.Title.localeCompare)
      );
  }

  // useEffect(() => {
  //   async function fetchMedia() {
  //     const { data } = await axios.get(
  //       `https://www.omdbapi.com/?apikey=253f9b44&s=${Title}`
  //     );
  //     setMedias(data);
  //   }
  //   fetchMedia();
  // }, []);

  return (
    <div className="media">
      <Navbar />
      <div className="background">
        <img src={movie_banner} alt="" className="banner__img" />
        <input
          className="search__bar"
          type="search"
          value={searchTitle}
          placeholder="Search Here"
          onChange={(event) => setSearchTitle(event.target.value)}
        />
        <FontAwesomeIcon icon="magnifying-glass" className="search__icon" onClick={() => onSearch()} />
        <div className="search__results">
          <h1 className="title">Search Results</h1>
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={(e) => filterMovies(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="OLD_TO_NEW">Year, Old to New</option>
            <option value="NEW_TO_OLD">Year, New to Old</option>
            <option value="MOVIES_TO_SERIES">Movies, Series</option>
            <option value="SERIES_TO_MOVIES">Series, Movies</option>
            <option value="TITLE">Alphabetically</option>
          </select>
        </div>
        <div className="media__list">
          <div className="media__card">
            {/* {medias.map((media) => ( */}
            <div className="media__card--container">
              <h2>Title</h2>
              <p>Type</p>
              <p>Year</p>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;

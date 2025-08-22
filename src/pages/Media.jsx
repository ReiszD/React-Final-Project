import React, { useEffect, useState } from "react";
import "./Media.css";
import Navbar from "../components/Navbar";
import movie_banner from "../assets/movie_banner.avif";
import movie_poster from "../assets/movie-poster.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Media = () => {
  // We only need one state for the movies being displayed
  const [medias, setMedias] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchMedia(title) {
    setLoading(true);
    if (!title) return; // Prevent searching with an empty string
    
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=253f9b44&s=${title}`
      );
      if (data.Search) {
        setMedias(data.Search);
      } else {
        setMedias([]); // Clear results if nothing is found
      }
    } catch (error) {
      console.error("Error fetching media:", error);
      setMedias([]);
    }
    setLoading(false);
  }

  function onSearch() {
    fetchMedia(searchTitle);
  }

  function filterMovies(filter) {
    console.log(filter);
    
    // Create a new array to avoid mutating the original state directly
    let sortedMedias = [...medias];

    if (filter === "OLD_TO_NEW") {
      sortedMedias.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }
    if (filter === "NEW_TO_OLD") {
      sortedMedias.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    if (filter === "MOVIES_TO_SERIES") {
      sortedMedias.sort((a, b) => a.Type.localeCompare(b.Type));
    }
    if (filter === "SERIES_TO_MOVIES") {
      sortedMedias.sort((a, b) => b.Type.localeCompare(a.Type));
    }
    if (filter === "TITLE") {
      sortedMedias.sort((a, b) => a.Title.localeCompare(b.Title));
    }

    setMedias(sortedMedias); // Update the state with the sorted array
  }

  // Optional: Fetch a default set of movies when the component mounts
  useEffect(() => {
    fetchMedia("Harry Potter"); // Example: default search
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="media">
      <Navbar />
      {loading ? <div className="spinner__icon">
        <FontAwesomeIcon icon="spinner" />
      </div> : (
      <div className="background">
        <img src={movie_poster} alt="" className="banner__img" />
        <div className="search__here">

        <input
          className="search__bar"
          type="search"
          value={searchTitle}
          placeholder="Search Here"
          onChange={(event) => setSearchTitle(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearch();
            }
          }}
          />
        <FontAwesomeIcon icon="magnifying-glass" className="search__icon" onClick={onSearch} />
          </div>
        <div className="search__results">
          <h1 className="title">Search Results</h1>
          {medias.length > 0 && (
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
          )}
        </div>
        <div className="media__list">
          <div className="media__card">
            {medias && medias.length > 0 ? (
              medias.slice(0,6).map((media) => (
                <div className="media__card--container" key={media.imdbID}>
                  <h2 className="card__title" onClick={() => navigate(`${media.imdbID}`)}>{media.Title}</h2>
                  <p className="card__type">{media.Type}</p>
                  <p className="card__year">{media.Year}</p>
                  <img src={media.Poster} alt={media.Title} className="card__img" />
                </div>
              ))
            ) : (
              <p>No results found. Try searching for a movie title!</p>
            )}
          </div>
        </div>
      </div>)}
      <Footer />
    </div>
  );
};

export default Media;

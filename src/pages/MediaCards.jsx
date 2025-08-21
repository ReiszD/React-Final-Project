import React from "react";
import "./MediaCards.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MediaCards = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
            <Link>
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
          <div className="media__selected">
            <figure className="media__selected--img">
              <img src="" alt="" />
            </figure>
          </div>
          <div className="media__selected--description">
            <h2>Title</h2>
            <p>Actors</p>
            <p>Plot</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaCards;

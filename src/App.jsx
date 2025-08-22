import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Media from "./pages/Media.jsx";
import Home from "./pages/Home.jsx";
import MediaCards from "./pages/MediaCards.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/media/:imdbID" element={<MediaCards />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

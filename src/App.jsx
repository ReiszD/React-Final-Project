import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Media from "./pages/Media.jsx";
import Home from "./pages/Home.jsx";
import MediaCards from "./pages/MediaCards.jsx";

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");

  async function fetchMedia(title) {

    if (!title) return;
    
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=253f9b44&s=${title}`
      );
      if (data.Search) {
        setMedias(data.Search);
      } else {
        setMedias([]);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
      setMedias([]);
    }
    
  }

  function onSearch() {
    fetchMedia(searchTitle);
  }

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

import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=fea7ddf5";

const movie1 = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};
const App = () => {
  const [movies, setMovie] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };
  useEffect(() => {
    searchmovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" 
        onClick={() => searchmovies(searchTerm)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {movies.map((movie)=> (
           <MovieCard movie={movie} /> 
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

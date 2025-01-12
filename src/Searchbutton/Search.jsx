import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Search = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
   const location =useLocation()
    const query = location.state?.query||"" // Access query  from  state 
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    if (query.trim() !== "") {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          );
          const data = await response.json();
          setMovies(data.results || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };

      fetchMovies();
    }
  }, [query]); // Runs whenever query changes

  return (
    <div className="search-page">
      <h2>{query}</h2>
      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

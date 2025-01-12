import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  //  it  will Downlode  upcoming move
  const fetchUpcomingMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      {loading && <p>Loading...</p>}
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default UpcomingPage;

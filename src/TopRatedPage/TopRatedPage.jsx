import React, { useState, useEffect } from "react";
import './TopRatedPage.css'
const  TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5); // Movies per page
   const [loading,setLoading]=useState()

  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  //  it will be fatesh top-rratedmovies
  const fetchTopRatedMovies = async (page) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(true)
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies(currentPage);
  }, [currentPage]);

  //  get the movies   from current  page
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <div>
      <h1>Top Rated Movies (Page {currentPage})</h1>
      <div className="movies-container">
        {currentMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading more movies...</p>}

    </div>
  );
};

export default TopRatedPage;

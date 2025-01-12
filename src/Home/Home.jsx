
import React, { useEffect, useState } from "react";
import axios from "axios";
 import './Home.css'
 import MovieCard from "../MovieCard/MovieCard";
const HomePage = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const API_ID=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await axios.get( API_ID);
       console.log(response)
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  fetchMovies();
}, []);

return (
  // <div class="page-container">
  //   <h1>Popular Movies</h1>

  //  <div class="page_div">
  //   {movies.map((movie)=>(
  //     <div key={movie.id}>
  //       <h2>{movie.title}</h2>
  //       <img
  //             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //             alt={movie.title}
  //             style={{ width: '200px', height: '300px' }}
  //           />
  //       {/* <p><strong>Overvi</strong></p> */}
       
  //       {/* <p><strong>Overview:</strong> {movie.overview}</p> */}
  //           {/* <p><strong>Release Date:</strong> {movie.release_date}</p> */}
  //          {/* <p><strong>Popularity:</strong> {movie.popularity}</p> */}
  //           <p><strong>Rating</strong> {movie.vote_average}</p>
  //           {/* <p><strong>Vote Count:</strong> {movie.vote_count}</p> */}
  //           {/* <p><strong>Original Language:</strong> {movie.original_language}</p> */}
  //           {/* <p><strong>Genres:</strong> {movie.genre_ids.join(', ')}</p> */}
  //           {/* <p><strong>Adult Content:</strong> {movie.adult ? 'Yes' : 'No'}</p> */}
            
  //     </div>

       
  //     ))}
  //  </div>
  // </div>
  <div className="movie-container">
  {movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>
);
};

export default HomePage;

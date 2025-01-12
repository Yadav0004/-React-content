import { Link } from "react-router-dom";
 import './MovieCard.css'
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="movie-image"
        />
      </Link>
      <div className="movie-details">
        <h3>{movie.title} </h3>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

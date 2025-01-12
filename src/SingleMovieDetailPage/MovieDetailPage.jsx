import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MovueDetailPage.css'
const MovieDetailPage = () => {
  const { id } = useParams(); // Get the movie id from the URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovie(data);

        // Fetch cast details
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        const creditsData = await creditsResponse.json();
        setCast(creditsData.cast);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found!</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Vote Average:</strong> {movie.vote_average}</p>

      <h2>Cast</h2>
      <div className="cast-container">
        {cast.slice(0, 10).map((actor) => (
          <div key={actor.id} className="cast-card">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/150"
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p >
              as {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;

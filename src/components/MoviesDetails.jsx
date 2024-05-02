import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const MovieDetails = ({ movies }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const movieId = movies.params.movieId;

  const fechtDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=d04e425&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  useEffect(() => {
    fechtDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <div style={{ display: "flex" }}>
              <img src={movieDetails.Poster} alt={movieDetails.Title} style={{ width: "200px", marginRight: "20px" }} />
              <div>
                <h1>{movieDetails.Title}</h1>
                <p>Year: {movieDetails.Year}</p>
                <p>Director: {movieDetails.Director}</p>
                <p>Plot: {movieDetails.Plot}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;

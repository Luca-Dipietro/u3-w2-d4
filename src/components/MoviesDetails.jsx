import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();

  const fechtDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=d04e425&i=${params.movieId}`)
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
  }, []);

  return (
    <>
      {movieDetails && (
        <Col className="d-flex justify-content-center mt-5 movie-details">
          <Card className="custom-card">
            <Card.Body>
              <div style={{ display: "flex" }}>
                <img src={movieDetails.Poster} alt={movieDetails.Title} className="movie-poster" />
                <div>
                  <h1>{movieDetails.Title}</h1>
                  <p>
                    <strong>Year:</strong> {movieDetails.Year}
                  </p>
                  <p>
                    <strong>Director:</strong> {movieDetails.Director}
                  </p>
                  <p>
                    <strong>Plot:</strong> {movieDetails.Plot}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MovieDetails;

import React, { useState, useEffect } from "react";
import { Container, Col, Spinner, Alert } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const MoviesGallery = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = (searchTitle) => {
    setIsLoading(true);
    console.log("Fetch on loading...");
    fetch(`http://www.omdbapi.com/?apikey=d04e425&s=${searchTitle}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        } else {
          console.log("Fetch completed");
          return response.json();
        }
      })
      .then((movie) => {
        setMovies(movie.Search);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMovies(props.searchTitle);
  }, [props.searchTitle]);

  const settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "80px",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container fluid className="mb-3">
      <div className="d-flex align-items-center mb-3">
        <h4 className="text-light mb-0">{props.title}</h4>
        {isLoading && <Spinner animation="border" variant="primary" className="ms-3" />}
      </div>
      {isError && <Alert variant="danger">Failed to fetch movies</Alert>}
      <div className="slider-container">
        {!isError && (
          <Slider {...settings}>
            {movies.map((movie) => (
              <Col key={movie.imdbID}>
                <div className="d-flex justify-content-center">
                  <img
                    src={movie.Poster}
                    alt={`Poster of ${movie.Title}`}
                    onClick={() => <NavLink to="/MovieDetails" />}
                  />
                </div>
              </Col>
            ))}
          </Slider>
        )}
      </div>
    </Container>
  );
};

export default MoviesGallery;

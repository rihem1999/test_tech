import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <Link to={{ pathname: `/movie/${movie.imdbID}` }} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

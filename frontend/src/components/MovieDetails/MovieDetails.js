import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { getMovie } from '../../actions/movies'
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie } = useSelector((state) => state.movies);


  useEffect(() => {
    dispatch(getMovie(id));

  }, [dispatch, id]);
  

  

  if (!movie) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4">{movie.Title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item"><strong>Year:</strong> {movie.Year}</li>
            <li className="list-group-item"><strong>Rated:</strong> {movie.Rated}</li>
            <li className="list-group-item"><strong>Released:</strong> {movie.Released}</li>
            <li className="list-group-item"><strong>Runtime:</strong> {movie.Runtime}</li>
            <li className="list-group-item"><strong>Genre:</strong> {movie.Genre}</li>
            <li className="list-group-item"><strong>Director:</strong> {movie.Director}</li>
            <li className="list-group-item"><strong>Writer:</strong> {movie.Writer}</li>
            <li className="list-group-item"><strong>Actors:</strong> {movie.Actors}</li>
            <li className="list-group-item"><strong>Plot:</strong> {movie.Plot}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

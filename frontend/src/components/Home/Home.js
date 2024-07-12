import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import MovieCard from "../MovieCard/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

import { getMovies } from "../../actions/movies";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("movie");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies(currentPage, searchTerm));
  }, [dispatch, currentPage, searchTerm]);

 
  return (
    <div className="container">
      <h1 className="my-4">Movie Search</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={searchTerm==='movie' ? '' : searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="row my-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

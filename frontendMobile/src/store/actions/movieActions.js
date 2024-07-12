// src/store/actions/movieActions.js
import axios from 'axios';

export const fetchMovies = (title) => async (dispatch) => {
  try {
    console.log("jet l houni")
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=2dad11ba`);
    dispatch({ type: 'SET_MOVIES', payload: response.data.Search });
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=2dad11ba`);
    dispatch({ type: 'SET_MOVIE_DETAILS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

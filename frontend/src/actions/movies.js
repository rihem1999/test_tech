import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_MOVIE, FETCH_BY_SEARCH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getMovie = (id) => async (dispatch) => {
  try {
    console.log("je l houni ou pas 2!")

    dispatch({ type: START_LOADING });
    console.log("je l houni ou pas 3!")
    const { data } = await api.fetchMovie(id);
    console.log(data);
    dispatch({ type: FETCH_MOVIE, payload: { movie: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = (page, searchTerm) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      
      
      const response = await api.fetchMovies(page, searchTerm);
      console.log(response);
      
      const data = response.data;
      
      if (data.Response === 'True') {
        dispatch({ type: FETCH_ALL, payload: { data : data.Search } });
      } else {
        throw new Error(data.Error);
      }
      
      dispatch({ type: END_LOADING });
      console.log('Movies fetched successfully!');
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  };








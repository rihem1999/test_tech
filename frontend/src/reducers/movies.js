import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_MOVIE } from '../constants/actionTypes';

const moviesReducer = (state = { isLoading: true, movies: [], movie: null }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        movies: action.payload.data,
      };
    case FETCH_BY_SEARCH:
      return { ...state, movies: action.payload.data };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.movie };
    default:
      return state;
  }
};

export default moviesReducer;

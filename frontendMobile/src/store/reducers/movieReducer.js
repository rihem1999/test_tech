// src/store/reducers/movieReducer.js
const initialState = {
    movies: [],
    movieDetails: {},
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return { ...state, movies: action.payload };
      case 'SET_MOVIE_DETAILS':
        return { ...state, movieDetails: action.payload };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  
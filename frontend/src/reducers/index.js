import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // other reducers can be added here
  },
});

export default store;

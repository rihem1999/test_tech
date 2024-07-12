// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    // other reducers can be added here
  },
});

export default store;

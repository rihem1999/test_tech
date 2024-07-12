// src/screens/DetailScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../store/actions/movieActions';

const DetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <View>
      <Text>Title: {movieDetails.Title}</Text>
      <Text>Year: {movieDetails.Year}</Text>
      <Text>Genre: {movieDetails.Genre}</Text>
      <Text>Director: {movieDetails.Director}</Text>
    </View>
  );
};

export default DetailScreen;

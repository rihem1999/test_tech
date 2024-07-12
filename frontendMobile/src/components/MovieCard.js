// src/components/MovieCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{movie.Title}</Text>
        <Text>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

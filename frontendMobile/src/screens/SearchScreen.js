// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/actions/movieActions';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  const searchMovies = () => {
    dispatch(fetchMovies(title));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter movie title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Search" onPress={searchMovies} />
      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({ item }) => (
            <MovieCard movie={item} onPress={() => navigation.navigate('Detail', { movieId: item.imdbID })} />
          )}
      />
    </View>
  );
};

export default SearchScreen;

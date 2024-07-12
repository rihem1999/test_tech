import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/actions/movieActions';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const isLoading = useSelector(state => state.movies.loading);

  const searchMovies = () => {
    dispatch(fetchMovies(title));
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
        <View style={styles.topContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter movie title"
            value={title}
            onChangeText={setTitle}
          />
          <Button title="Search" onPress={searchMovies} />
          <FlatList
            style={styles.flatList}
            data={movies}
            keyExtractor={item => item.imdbID}
            renderItem={({ item }) => (
              <MovieCard movie={item} onPress={() => navigation.navigate('Detail', { movieId: item.imdbID })} />
            )}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInputCentered: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  flatList: {
    marginTop: 10,
  },
});

export default SearchScreen;

import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../store/actions/movieActions';

const DetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (!movieDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movieDetails.Poster }}
        style={styles.posterImage}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movieDetails.Title}</Text>
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Year:</Text>
            <Text style={styles.cellData}>{movieDetails.Year}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Rated:</Text>
            <Text style={styles.cellData}>{movieDetails.Rated}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Released:</Text>
            <Text style={styles.cellData}>{movieDetails.Released}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Runtime:</Text>
            <Text style={styles.cellData}>{movieDetails.Runtime}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Genre:</Text>
            <Text style={styles.cellData}>{movieDetails.Genre}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Director:</Text>
            <Text style={styles.cellData}>{movieDetails.Director}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Writer:</Text>
            <Text style={styles.cellData}>{movieDetails.Writer}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Actors:</Text>
            <Text style={styles.cellData}>{movieDetails.Actors}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Plot:</Text>
            <Text style={styles.cellData}>{movieDetails.Plot}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  tableContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  cellLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cellData: {
    flex: 4,
    fontSize: 14.,
  },
});

export default DetailScreen;

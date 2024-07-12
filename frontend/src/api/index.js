import axios from 'axios';

const apiKey = '2dad11ba';
const API = axios.create({ baseURL: 'http://www.omdbapi.com'});

export const fetchMovie = (id) => API.get(`/?i=${id}&apikey=${apiKey}`);
export const fetchMovies = (page, searchTerm) => API.get(`/?s=${searchTerm}&apikey=${apiKey}&page=${page}`);

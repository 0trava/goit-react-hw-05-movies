import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3672c0915275ace21cbbe4fc0e9b5fda';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

export const getReviews = async movieId => {
  const queryString = `movie/${movieId}/reviews$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};
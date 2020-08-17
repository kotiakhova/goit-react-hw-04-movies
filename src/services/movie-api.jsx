// const baseURL = 'http://api.tvmaze.com';
const apiKey = 'f351f35f5c5ef04d6e0b57b86a06eca5';

const fetchPopularMovies = () => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
  .then(res => res.json())
  .catch(error => console.log(error))
};
const fetchMoviesWithQuery = searchQuery => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    .then(res => res.json())
    .catch(error => console.log(error))
};
const fetchMoviesDetails = movieId => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .catch(error => console.log(error))
}
const fetchMoviesCast = movieId => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
    .then(res => res.json())
    .catch(error => console.log(error))
};
const fetchMoviesReviws = movieId => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .catch(error => console.log(error))
};
export default { fetchPopularMovies, fetchMoviesWithQuery, fetchMoviesDetails,fetchMoviesCast,fetchMoviesReviws };
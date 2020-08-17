import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moviesAPI from '../../services/movie-api';
import styles from './MoviePage.module.css';
import routes from '../../routes';


export default class MoviePage extends Component {
  state = {
    movies: [],

  };

  componentDidMount() {
    moviesAPI.fetchPopularMovies().then(movies => {
        this.setState({ movies })

    });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
      <h2 className={styles.font}>Trending today</h2>
        {movies.total_results > 0 && (
          <ul className={styles.font}>
            {movies.results.map(movies => (
              <li key={movies.id}>
                <Link to={`${routes.moviePage}/${movies.id}`}>{movies.title}</Link>
              </li>
            ))}
          </ul>
        )}


      </>
    );
  }
}
import React, { Component} from 'react';
import moviesAPI from '../../services/movie-api';
import InlineMovieCast from '../InlineMovieCast'
import routes from '../../routes';
import { Link, Route } from 'react-router-dom';
import InlineMovieReviews from '../InlineMovieRewiews'
import styles from './MovieDetailsPage.module.css';


export default class MovieDetailsPage extends Component {
  state = { 
    movie: null 
  };

  componentDidMount() {
    moviesAPI
      .fetchMoviesDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.homePage);
  };


  render() {
    const getPosterUrl = 'https://image.tmdb.org/t/p/w500';
    const { match } = this.props;
    const {movie} = this.state
    return (
      <>
          {movie && (
            <>
            <button type="button" onClick={this.handleGoBack} className={styles.mB10}>Go back</button>
            <div className={styles.container}>
              <img
                src={movie.poster_path && `${getPosterUrl}${movie.poster_path}`}
                alt={movie.title}
                width='300px'
              />
              <div className={styles.smallContainer}>
                <h2>{movie.title}</h2>
                <p>User Score: {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genre</h3>
                <span className={styles.dFlex}>{movie.genres.map(genre=> (
                  <p key={genre.id} className={styles.mR10}>{genre.name}</p>
                ))}</span>
              </div>
            </div>
            <div className={styles.font} >
              <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${match.url}/cast`}>Cast</Link>
            </li>
            <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Route path={`${match.path}/cast`} component={InlineMovieCast} />
          <Route path={`${match.path}/reviews`} component={InlineMovieReviews} />
            </div>
            </>
          )}

      </>
    );
  }
}
import React, { Component } from 'react';
import moviesAPI from '../services/movie-api';

export default class InlineMovieCast extends Component {
  state = { cast: null };

  componentDidMount() {
    moviesAPI
      .fetchMoviesCast(this.props.match.params.movieId)
      .then(cast=> {
        this.setState({ cast })});
  }

  render() {
    const { cast } = this.state;
    const getPosterUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <>
          {cast && (
            <ul>
            {cast.cast.map(actor=> (
              <li key={actor.id}>
                  <img
                src={actor.profile_path && `${getPosterUrl}${actor.profile_path}`}
                alt={actor.name}
                width='100px'
                        />
                  <p>{actor.name}</p>
                  <p>Character:{actor.character}</p>
              </li>

            ))
          }</ul>)}
      </>
    );
  }
}
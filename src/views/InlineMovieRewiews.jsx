import React, { Component } from 'react';
import moviesAPI from '../services/movie-api';

export default class InlineMovieReviews extends Component {
  state = { reviews: null };

  componentDidMount() {
    moviesAPI
      .fetchMoviesReviws(this.props.match.params.movieId)
      .then(reviews=> {
        this.setState({ reviews })});
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
      {reviews && (
        reviews.total_results >0? 
        <ul>
          {reviews.results.map(review=> (
          <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
          </li>

        ))
        }
        </ul>: 
        <p>We don't have any reviews for this movie.</p>
      )}

  </>
    );
  }
}
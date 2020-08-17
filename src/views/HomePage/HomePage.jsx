import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../../utils/get-query-params';
import Searchbox from '../../components/SearchBox';
import moviesAPI from '../../services/movie-api';
import styles from './HomePage.module.css';
import routes from '../../routes';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchShows(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = query => {
      moviesAPI.fetchMoviesWithQuery(query).then(movies => this.setState({ movies }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

        {movies.total_results > 0 ? (
          <ul className={styles.font}>
            {movies.results.map(movies => (
              <li key={movies.id}>
                <Link
                  to={{
                    pathname: `${routes.moviePage}/${movies.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movies.original_title}
                </Link>
              </li>
            ))}
          </ul>
        ): <p className={styles.font}>We did not find any films.</p>}
      </>
    );
  }
}
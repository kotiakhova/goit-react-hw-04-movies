import React from 'react';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import {lazy, Suspense} from 'react';

import Layout from './Layout';
import Navigation from './Navigation/Navigation';
import routes from '../routes';
// import HomePage from '../views/HomePage/HomePage';
// import MoviePage from '../views/MoviePage/MoviePage';
// import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
// import InlineMovieCast from '../views/InlineMovieCast';
// import InlineMovieReviews from '../views/InlineMovieRewiews'


const App = () => (
    <BrowserRouter>
        <Layout>
        <Navigation />
        <hr />
        <Suspense fallback={<h2>Loading..</h2>}>
            <Switch>
                <Route path={routes.homePage} exact component={lazy(() => import('../views/MoviePage/MoviePage' // webpackChunkName: "movie-page"    
                ))} />
                <Route path={routes.moviePage} exact component={lazy(() => import('../views/HomePage/HomePage' // webpackChunkName: "home-page"//     
                ))} />
                <Route path={routes.movieDetailsPage} component={lazy(() => import('../views/MovieDetailsPage/MovieDetailsPage' // webpackChunkName: "movie-detail-page"//     
                ))}/>
                <Route path={routes.cast} component={lazy(() => import('../views/InlineMovieCast' // webpackChunkName: "movie-cast-page"//     
                ))}/>
                <Route path={routes.reviews} component={lazy(() => import('../views/InlineMovieRewiews' // webpackChunkName: "movie-rewiews-page"//     
                ))}/>
            </Switch>
        </Suspense>
        </Layout>
    </BrowserRouter>
  );
  export default App;
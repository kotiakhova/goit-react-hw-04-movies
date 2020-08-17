

export default 
{
  homePage: '/',
  moviePage: '/movies',
  movieDetailsPage: '/movies/:movieId',
  cast: '/movies/:movieId/cast',
  rewiews: '/movies/:movieId/reviews'
};

// [
//   {
//     path: '/',
//     exact: true,
//     component: lazy(() => import('./views/MoviePage/MoviePage' // webpackChunkName: "movie-page"
//     ))
//   },
//   {
//     path: '/movies',
//     exact: true,
//     component: lazy(() => import('./views/HomePage/HomePage' // webpackChunkName: "home-page"
//     ))
//   },
// ]


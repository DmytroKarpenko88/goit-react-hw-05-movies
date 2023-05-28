import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { lazy } from 'react';
import PageNotFound from 'Pages/PageNotFound/PageNotFound';

const Home = lazy(() => import('../../Pages/Home'));
const MovieDetails = lazy(() =>
  import('../../Pages/Moviedetails/MovieDetails')
);
const Movies = lazy(() => import('../../Pages/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:query" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

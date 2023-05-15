import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';
import Movies from 'Pages/Movies';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

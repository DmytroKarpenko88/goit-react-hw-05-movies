import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'mov-1',
    'mov-2',
    'mov-3',
    'mov-4',
    'mov-5',
    'mov-6',
    'mov-7',
    'mov-8',
  ]);
  const location = useLocation();
  console.log('location:', location);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  // filer
  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: e.target.value });
    // const nextParams = name !== '' ? {name} : {};
    // setSearchParams(nextParams)
  };

  return (
    <div>
      <h2>Movies 🎬</h2>

      <input type="text" value={movieId} onChange={updateQueryString} />

      <ul>
        {visibleMovies.map(mov => {
          return (
            <li key={mov}>
              <Link to={`${mov}`} state={{ from: location }}>
                {mov}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;

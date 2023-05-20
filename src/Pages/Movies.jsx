import { Notify } from 'notiflix';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('location:', location);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const movieId = searchParams.get('movieId') ?? '';

  const onSubmit = newQuery => {
    if (newQuery !== query) {
      setQuery(query);
      getMovies();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!movieId) {
      Notify.failure('Enter the request');
      return;
    }
    onSubmit(movieId);
  };

  // filer
  // const visibleMovies = movies.filter(movie => movie.includes(movieId));

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: e.target.value });
    // const nextParams = name !== '' ? {name} : {};
    // setSearchParams(nextParams)
  };

  const getMovies = async () => {
    await searchMovie(movieId).then(({ results }) => {
      console.log(results);
      setMovies([...results]);
    });
  };

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   // console.log('query', query);

  //   getMovies();
  // }, [getMovies, query]);

  return (
    <div>
      <h2>Movies 🎬</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" value={movieId} onChange={updateQueryString} />
      </form>
      <input type="text" value={movieId} onChange={updateQueryString} />

      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img src={poster_path} alt={title} />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;

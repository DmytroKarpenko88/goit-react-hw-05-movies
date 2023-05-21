import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import { IMG_URL } from 'variables';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('location:', location);

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchParams.get('query') ?? '';

  const onSubmit = () => {
    setSearchQuery(query);
    getMovies();
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      Notify.failure('Enter the request');
      return;
    }
    onSubmit(query);
  };

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
    // const nextParams = name !== '' ? {name} : {};
    // setSearchParams(nextParams)
  };

  const getMovies = async () => {
    await searchMovie(query).then(({ results }) => {
      console.log(results);
      setMovies([...results]);
    });
  };

  useEffect(() => {
    if (!searchQuery) {
      console.log('Back');

      if (query) {
        searchMovie(query).then(({ results }) => setMovies([...results]));
      }
      return;
    }
    searchMovie(searchQuery).then(({ results }) => setMovies([...results]));
  }, [searchQuery]);

  return (
    <div>
      <h2>Movies 🎬</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" value={query} onChange={updateQueryString} />
      </form>
      {/* <input type="text" value={query} onChange={updateQueryString} /> */}

      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img src={`${IMG_URL}${poster_path}`} alt={title} />
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

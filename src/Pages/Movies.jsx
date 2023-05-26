import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

import Search from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    searchMovie(query).then(({ results }) => setMovies([...results]));
  }, [query]);

  return (
    <>
      <Search onSubmit={onSubmit} />
      <MoviesList moviesList={movies} />
    </>
  );
};

export default Movies;

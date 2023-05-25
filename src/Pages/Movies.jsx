import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

import Search from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';
import LoadMore from 'components/Buttons/LoadMore';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activPage, setActivPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  const onClick = activPage => {
    setActivPage(activPage);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query, activPage)
      .then(({ results }) => setMovies(prev => [...prev, ...results]))
      .finally(setLoading(true));
  }, [activPage, query]);

  return (
    <>
      <Search onSubmit={onSubmit} />
      <MoviesList moviesList={movies} />
      {movies.length > 0 && loading && <LoadMore onClick={onClick} />}
    </>
  );
};

export default Movies;

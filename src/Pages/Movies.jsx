import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import { IMG_URL } from 'services/variables';
import poster from '../components/Images/movie-background-collage.jpg';
import { Grid, GridItem } from 'components';
import Search from 'components/Search/Search';
// import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
      {/* <MoviesList moviesList={movies} /> */}
      <Grid>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <GridItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  src={poster_path ? `${IMG_URL}${poster_path}` : poster}
                  alt={title}
                />
                {title}
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default Movies;

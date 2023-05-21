import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import { IMG_URL } from 'services/variables';
import poster from '../components/Images/movie-background-collage.jpg';
import { Heading, Grid, GridItem } from 'components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('location:', location);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(query);

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
      return;
    }
    searchMovie(searchQuery).then(({ results }) => setMovies([...results]));
  }, [searchQuery]);

  return (
    <div>
      <Heading>Movies 🎬</Heading>

      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" value={query} onChange={updateQueryString} />
      </form>
      {/* <input type="text" value={query} onChange={updateQueryString} /> */}

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
    </div>
  );
};

export default Movies;

import { Grid, GridItem } from 'components';
import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import poster from '../Images/movie-background-collage.jpg';
import { IMG_URL } from 'services/variables';

const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <div>
      <h1>Tranding today 👍</h1>
      <Grid>
        {moviesList.map(({ id, title, name, original_title, poster_path }) => (
          <GridItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <>
                <img
                  src={poster_path ? `${IMG_URL}${poster_path}` : poster}
                  alt={original_title || name}
                />
              </>
              <p>{title || name}</p>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesList;

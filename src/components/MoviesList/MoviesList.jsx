import { Grid, GridItem } from 'components';
import React from 'react';

import { Link, useLocation } from 'react-router-dom';

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
              <div>
                <img
                  src={`${IMG_URL}${poster_path}`}
                  alt={original_title || name}
                />
              </div>
              <p>{title || name}</p>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesList;

import { Grid, GridItem } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

import photo_Pattern from '../../components/Images/person-png-icon-1.png';
import { IMG_URL } from 'services/variables';

const Cast = () => {
  const { query } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCredits(query).then(({ cast }) => {
      console.log(cast);
      setCasts(cast);
    });
  }, [query]);
  return (
    <div>
      <h3>Top Billed Cast</h3>
      <Grid>
        {casts.map(({ id, name, profile_path, character }) => {
          return (
            <GridItem key={id}>
              <div>
                <img
                  src={
                    profile_path ? `${IMG_URL}${profile_path}` : photo_Pattern
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cast;

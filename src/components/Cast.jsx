import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

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
      <>Cast: {query}</>
      <h3>Top Billed Cast</h3>
      <ul>
        {casts.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

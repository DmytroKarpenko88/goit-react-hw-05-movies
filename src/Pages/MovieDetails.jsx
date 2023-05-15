import { Outlet, useParams } from 'react-router-dom';
import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('params:', movieId);

  return (
    <div>
      <h1>MovieDetails 🎬</h1>
      <ul>
        <li>
          <StyledLink to={'cast'}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

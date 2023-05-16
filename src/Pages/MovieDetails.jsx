import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { StyledLink } from './MovieDetails.styled';
import { Suspense, useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log('backLinkLocationRef:', backLinkLocationRef);
  console.log('location:', location);

  return (
    <div>
      <h1>MovieDetails 🎬 {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <ul>
        <li>
          <StyledLink to={'cast'}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('params:', movieId);

  return (
    <div>
      <h1>MovieDetails 🎬</h1>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

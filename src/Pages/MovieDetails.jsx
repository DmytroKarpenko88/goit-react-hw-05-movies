import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { StyledLink } from './MovieDetails.styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log('backLinkLocationRef:', backLinkLocationRef);
  console.log('location:', location);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await getMovieDetails(movieId);
        setMovie(res);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetails();
  }, [movieId]);
  return (
    <div>
      <h1>MovieDetails 🎬 {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <div>
        <h2>{movie.title}</h2>
        <section>
          <div>
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div>
            <section>
              <div>
                <h2>{movie.title}</h2>
              </div>
              <div className="facts">
                <span></span>
                <span>{movie.release_date}</span>
                {/* <span>{movie.genres.map(({ name }) => name).join(', ')}</span> */}
                <span>{movie.runtime}</span>
              </div>
              <ul>
                <li>
                  <p>{movie.vote_average}</p>
                </li>
                <li>
                  <Link>Play trailer</Link>
                </li>
              </ul>

              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </section>
          </div>
        </section>
      </div>

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

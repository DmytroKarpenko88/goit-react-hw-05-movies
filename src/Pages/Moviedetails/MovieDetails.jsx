import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Box, LinkList, Section, StyledLink } from './MovieDetails.styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from 'services/api';
import { IMG_URL } from 'services/variables';
import photo_Pattern from '../../Images/movie-background-collage.jpg';
import BtnBack from 'components/Buttons/LinkBack';
import { Heading } from 'components';
import { formatYear } from 'utils/formateDate';

const MovieDetails = () => {
  const { query } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(query).then(res => {
      setMovie(res);
    });
  }, [query]);

  return (
    <div>
      <h1>MovieDetails 🎬 {movie.title}</h1>

      <BtnBack backLinkLocationRef={backLinkLocationRef} />
      <div>
        <Section>
          <Box>
            <img
              src={
                movie.poster_path
                  ? `${IMG_URL}${movie.poster_path}`
                  : photo_Pattern
              }
              alt={movie.title}
            />
          </Box>
          <div>
            <section>
              <div>
                <h2>
                  {movie.title}
                  <span>
                    ({movie.release_date ? formatYear(movie.release_date) : ''})
                  </span>
                </h2>
              </div>
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>

                <h3>Ganres</h3>
                <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
                <p>
                  <span>
                    <b>Runtime:</b>
                  </span>
                  {movie.runtime}
                </p>
              </div>
              <ul>
                <li>
                  <p>
                    <span>
                      <b>Riting: </b>
                    </span>
                    {movie.vote_average}
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </Section>
      </div>
      <Heading>Aditional information</Heading>
      <LinkList>
        <li>
          <StyledLink to={'cast'}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </li>
      </LinkList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

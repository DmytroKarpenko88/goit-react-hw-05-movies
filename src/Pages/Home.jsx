import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';
import { IMG_URL } from 'variables';

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  // const [activPage, setActivPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    console.log('First render');

    getListMovies();
  }, []);

  const getListMovies = async () => {
    setLoading(true);
    const { results } = await fetchTrending();
    console.log('results:', results);
    setMoviesList([...results]);
  };
  return (
    <div>
      <h1>Home page 👍</h1>
      <ul>
        {moviesList.map(({ id, title, name, original_title, poster_path }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <img
                src={`${IMG_URL}${poster_path}`}
                alt={original_title || name}
              />
              <p>{title || name}</p>
            </Link>
          </li>
        ))}
        {loading && (
          <button onClick={() => setLoading(!loading)}>Load more</button>
        )}
      </ul>
    </div>
  );
};

export default Home;

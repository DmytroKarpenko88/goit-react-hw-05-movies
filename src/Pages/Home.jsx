import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchTrending } from 'services/api';
import { IMG_URL } from 'variables';

const Home = () => {
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
            <p>{title || name}</p>
            <img
              src={`${IMG_URL}${poster_path}`}
              alt={original_title || name}
            />
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

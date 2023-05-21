import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

import { fetchTrending } from 'services/api';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activPage, setActivPage] = useState(1);
  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    fetchTrending(activPage)
      .then(({ results }) => setMoviesList(prev => [...prev, ...results]))
      .finally(setLoading(true));
  }, [activPage]);

  return (
    <div>
      <MoviesList moviesList={moviesList} />
      {loading && (
        <button
          type="button"
          onClick={() => {
            setActivPage(prev => prev + 1);
            setLoading(false);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Home;

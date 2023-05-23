import LoadMore from 'components/Buttons/LoadMore';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
// import { useRef } from 'react';

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

  const onClick = activPage => {
    setActivPage(activPage);
  };
  return (
    <div>
      <MoviesList moviesList={moviesList} />
      {loading && <LoadMore onClick={onClick} />}
    </div>
  );
};

export default Home;

import LoadMore from 'components/Buttons/LoadMore';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

import { fetchTrending } from 'services/api';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [activPage, setActivPage] = useState(1);

  useEffect(() => {
    setIsActive(false);
    fetchTrending(activPage)
      .then(({ results }) => setMoviesList(prev => [...prev, ...results]))
      .finally(setIsActive(true));
  }, [activPage]);

  const onClick = activPage => {
    setActivPage(activPage);
  };
  return (
    <div>
      <MoviesList moviesList={moviesList} />
      {moviesList.length > 0 && isActive && <LoadMore onClick={onClick} />}
    </div>
  );
};

export default Home;

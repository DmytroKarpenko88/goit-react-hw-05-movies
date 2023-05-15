import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h2>Movies 🎬</h2>
      {[
        'mov-1',
        'mov-2',
        'mov-3',
        'mov-4',
        'mov-5',
        'mov-6',
        'mov-7',
        'mov-8',
      ].map(mov => {
        return (
          <Link key={mov} to={`${mov}`}>
            {mov}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;

import { RevList } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  const { query } = useParams();
  const [reviews, setReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    getMovieReviews(query).then(({ results, total_results }) => {
      setReviews(results);
      setTotalResults(total_results);
    });
  }, [query]);

  return (
    <div>
      {totalResults && (
        <RevList>
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <ReviewsCard review={review} />
              </li>
            );
          })}
        </RevList>
      )}
    </div>
  );
};

export default Reviews;

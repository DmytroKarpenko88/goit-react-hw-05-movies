import { Heading, RevList } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  const { query } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(query).then(({ results, total_results }) => {
      setReviews(results);
    });
  }, [query]);

  return (
    <div>
      {reviews.length > 0 ? (
        <RevList>
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <ReviewsCard review={review} />
              </li>
            );
          })}
        </RevList>
      ) : (
        <Heading>No reviews</Heading>
      )}
    </div>
  );
};

export default Reviews;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { IMG_URL } from 'variables';

const Reviews = () => {
  const { query } = useParams();
  const [reviews, setReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    getMovieReviews(query).then(({ results, total_results }) => {
      setReviews(results);
      setTotalResults(total_results);
      console.log('results', results);
      console.log('total_results', total_results);
    });
  }, [query]);

  return (
    <div>
      <>Reviews: {query}</>
      {totalResults && (
        <ul>
          {reviews.map(
            ({
              id,
              author,
              content,
              url,
              created_at,
              author_details: { avatar_path, rating },
            }) => {
              return (
                <li key={id}>
                  <div>
                    <div>
                      <img src={`${IMG_URL}${avatar_path}`} alt={author} />
                    </div>
                    <div>
                      <h3>
                        <a href={url}>Review by {author}</a>
                      </h3>
                      <span>{rating}</span>
                    </div>
                    <h5>
                      Write by {author} on {created_at}
                    </h5>
                  </div>
                  <div>
                    <p>{content}</p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'tmdbApi/tmdb-api';

export default Reviews;

const notReviewsMessage = 'We don`t have any reviews for this movie';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const updateReviews = useCallback(() => {
    getReviews(id)
      .then(data => {
        if (data.results.length !== 0) {
          setReviews(
            data.results.map(
              ({ author_details: { username }, content, id }) => {
                const nickname = username.toUpperCase();
                return { nickname, content, id };
              }
            )
          );
        }
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    updateReviews();
  }, [updateReviews]);

  return reviews.length === 0 ? (
    <p>{notReviewsMessage}</p>
  ) : (
    <ul>
      {reviews.map(({ nickname, content, id }) => (
        <li key={id}>
          <p>{`Author: ${nickname}`}</p>
          <article>{content}</article>
        </li>
      ))}
    </ul>
  );
}

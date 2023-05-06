import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // доступ до параметрів поточного URL
import { getReviews } from '../../../services/movies-api';


const Reviews = () => {
    const { movieId } = useParams(); // додаємо доступ до параметрів поточного URL
    const [reviews, setReviews] = useState([]); // додаємо стейт для відгуків
  
    // додаємо запит на відгуки
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const { results } = await getReviews(movieId);
          setReviews(results);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchReviews();
    }, [movieId]);
  
    return (
      <div>

        {reviews.length ? (
          <div className="reviews-container">
            {reviews.map(review => (
              <div className="review-card" key={review.id}>
                <div>Author: {review.author}</div>
                <div>{review.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            We don't have any reviews for this movie yet.
          </div>
        )}
      </div>
    );
  };
  export default Reviews;
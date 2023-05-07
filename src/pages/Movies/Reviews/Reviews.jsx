import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // доступ до параметрів поточного URL
import { getReviews } from '../../../services/movies-api';
import css from './Reviews.module.css';
import PropTypes from 'prop-types';


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
          <div className={css.reviews_container}>
            {reviews.map(review => (
              <div className={css.review_card} key={review.id}>
                <div className={css.review_author}>Author: {review.author}</div>
                <div className={css.review_author_post}>{review.content}</div>
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


  Reviews.propTypes = {
    movieId: PropTypes.string.isRequired,
  };
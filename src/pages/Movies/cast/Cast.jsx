import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // доступ до параметрів поточного URL
import { getMovieCast } from '../../../services/movies-api'; // додаємо запит
import css from './Cast.module.css';



const Cast = () => {

    const { movieId } = useParams(); // додаємо параметр movieId
    const [cast, setCast] = useState([]);

    useEffect(() => {
      const fetchCast = async () => {
        try {
          const { cast } = await getMovieCast(movieId);
          setCast(cast);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchCast();
    }, [movieId]);
  
    return (
      <div>
  
        {/* додаємо перевірку на наявність акторів */}
        {cast.length ? (
          <div className={css.cast_list}>
            {cast.map(actor => (
              <div className="cast-card" key={actor.id}>
  
                {/* додаємо перевірку на наявність фото */}
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name} profile`}
                  />
                ) : (
                  <img
                    src={`https://via.placeholder.com/200x300?text=No+Image`}
                    alt={`${actor.name} profile`}
                  />
                )}
  
                {/* додаємо інформацію про актора */}
                <div>
                  <h3>{actor.name}</h3>
                  <p className={css.cast_character}>Character: {actor.character}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            We don't have any information about the cast yet.
          </div>
        )}
      </div>
    );
  };
  
  export default Cast;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // доступ до параметрів поточного URL
import { getMovieCast } from '../../../services/movies-api'; // додаємо запит




const Cast = () => {

    const { movieId } = useParams(); // додаємо параметр movieId
    const [cast, setCast] = useState([]);
    console.log(movieId);

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
          <div>
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
                  <div>{actor.name}</div>
                  <p>Character: {actor.character}</p>
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
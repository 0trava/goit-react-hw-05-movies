import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>

      {movies &&
        movies.map(
          ({
            id,
            title,
            // poster_path
          }) => (
            <ul>
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${`${id}`}`,
                    state: {
                      from: {
                        location,
                        label: 'Back to Home',
                      },
                    },
                  }}
                >
                  <p>{title}</p>
                </Link>
              </li>
            </ul>
          )
        )}
    </>
  );
};

export default HomePage;
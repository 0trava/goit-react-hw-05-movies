import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  console.log("start");
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
        movies.map(({id,title}) => (
            <ul>
              <li key={id}>
                <Link  to={{ pathname: `/movies/${`${id}`}`,
                    state: {
                      from: { location, label: 'Back to Home',},
                    },
                  }}>
                   
                  <p><span>&#9733;</span> {title}</p>
                </Link>
              </li>
            </ul>
          )
        )}
    </>
  );
};

export default Home;
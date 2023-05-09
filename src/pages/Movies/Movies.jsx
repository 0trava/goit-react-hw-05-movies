import css from './Movies.module.css';
import {useState, useEffect } from 'react'; // пакети для роботи зі станом
import {Link, useSearchParams, useLocation} from 'react-router-dom';
import {searchMovies} from '../../services/movies-api';

const Movies = () => {
const [filter, setFilter] = useState(''); // Хук для filter
const [searchParams, setSearchParams] = useSearchParams();
const [listMovies, setListMovies] = useState();
const location = useLocation();



useEffect(()=>{

  console.log(location.search.replace("?c=", ""));
  const searchLoad = location.search.replace("?c=", "");
  if (searchLoad === ""){
    return
  } else {
      const getMovies = async () => {
          const { results } = await searchMovies(searchLoad);
            setListMovies(results);
        };
      getMovies();  
  }
},[location.search])


const getSearchParams = async (e) => {
    console.log(searchParams);

    if (filter === ""){
        setSearchParams({});
    } else {
        e.preventDefault(); // Зупиняємо оновлення сторінки
        const getMovies = async () => {
            const { results } = await searchMovies(filter);
            if (results.length < 1){
              alert(`We didn't find film with this name "${filter}" `)
            } else {
              setListMovies(results);
            }
            
          };

        getMovies();  
        setSearchParams({c:`${filter}`});
        setFilter("");
    }


}



const handleChange = (event) => {
    setFilter(event.currentTarget.value);
}

return (
    <>
        <div className={css.Movies_container}>
         <form className={css.SearchForm}>
          <Link> 
          <button type="submit" className={css.SearchForm_button} onClick={getSearchParams}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>
          </Link> 

          <input
            name="filter"
            value={filter}
            onChange={handleChange}
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        </div>

        {listMovies &&
        listMovies.map(({id,title}) => (
            <ul>
              <li key={id}>
                <Link to={{ pathname: `/movies/${`${id}`}`}} state={{ from: location }}>
                  <p><span>&#9733;</span> {title}</p>
                </Link>
              </li>
            </ul>
          )
        )}
    </>


)    
}


export default Movies;
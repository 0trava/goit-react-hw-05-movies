import css from './Movies.module.css';
import {useState } from 'react'; // пакети для роботи зі станом
import {Link, useSearchParams} from 'react-router-dom';
import {searchMovies} from '../../services/movies-api';



const Movies = () => {
const [filter, setFilter] = useState(''); // Хук для filter
const [searchParams, setSearchParams] = useSearchParams();
const [listMovies, setListMovies] = useState();


const getSearchParams = (e) => {

    if (filter === ""){
        setSearchParams({});
    } else {
        e.preventDefault(); // Зупиняємо оновлення сторінки
        let filmlist = searchMovies(filter);
        setSearchParams({c:`${filter}`});
        setFilter("");
        console.log(filmlist);
    
        setListMovies(filmlist);
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

        { setListMovies && (
            <>
            <p>Nen</p>
            </>
        ) }
    </>


)    
}


export default Movies;
import css from './Movies.module.css';
import {useState } from 'react'; // пакети для роботи зі станом
import {Link} from 'react-router-dom';



const Movies = () => {
const [filter, setFilter] = useState(''); // Хук для filter

const handleChange = (event) => {
    setFilter(event.currentTarget.value)
}

return (
    <div className={css.Movies_container}>
         <form className={css.SearchForm}>
          <Link> 
          <button type="submit" className={css.SearchForm_button}>
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

)    
}


export default Movies;
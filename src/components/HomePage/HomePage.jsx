import Loader from '../Loader/Loader';
import { Suspense } from "react";
import { Outlet, Link } from 'react-router-dom';
import css from './HomePage.module.css'; // підключення стилів



const Header = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.header}>
          <div>
            <span className={css.logo} role="img" aria-label="movies">
            &#127916;
            </span>
          </div>
          <nav>
          <Link className={css.header_link} to="/">Home</Link>
          <Link className={css.header_link} to="movies">Movies</Link>
          </nav>        
        </div>
    </div>
        <div className={css.container_page}>

        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>

        </div>
    </div>

  );
};

  export default Header;
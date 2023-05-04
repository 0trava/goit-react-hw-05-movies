// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom';
import css from './HomePage.module.css'; // підключення стилів



const SharedLayout = () => {
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
          <Link className={css.header_link} to="/movies">Movies</Link>
          </nav>        
        </div>
    </div>
        <div className={css.container_page}>
        <Outlet />
        </div>
    </div>

  );
};

  export default SharedLayout;
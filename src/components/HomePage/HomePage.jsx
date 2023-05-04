// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom';
import css from './HomePage.module.css'; // підключення стилів



const SharedLayout = () => {
  return (
    <div className={css.container}>
        <div className={css.header}>
          <div>
            <span role="img" aria-label="movies">
              💻
            </span>{" "}
          </div>        
          <Link className={css.header_link} to="/">Home</Link>
          <Link className={css.header_link} to="/movies">Movies</Link>
        </div>
    {/* <Outlet /> */}
    {/* <div>
         <Outlet />
    </div> */}
    </div>
  );
};

  export default SharedLayout;
// import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';


export const SharedLayout = () => {
    return (
      <div name="Container">
        <div name="Header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </div>
  
        {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
        {/* </Suspense> */}
      </div>
    );
  };
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './HomePage/HomePage';
// import Loader from 'components/Loader/Loader';

const Home = lazy( async () => import('../pages/Home/Home'));
const Movies = lazy( async () => import('../pages/Movies/Movies'));
const MovieDetails = lazy( async () => import('../pages/Movies/MovieDetails/MovieDetails'));
const Cast = lazy( async () => import('../pages/Movies/cast/Cast'));
const Reviews = lazy( async () => import('../pages/Movies/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          {/*  */}
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          {/*  */}
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
};





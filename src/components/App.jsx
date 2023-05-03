import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Cast  from "../pages/Movies/cast/Cast";
import Home from "../pages/Home/Home";
import MovieDetails  from "../pages/Movies/MovieDetails";
import Reviews from "../pages/Movies/Reviews/Reviews";
import Movies from "../pages/Movies/Movies";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

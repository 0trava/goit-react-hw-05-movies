import css from "./MovieDetails.module.css";
import Loader from '../../../components/Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails, IMAGE_URL } from '../../../services/movies-api';
import {
    useParams,
    Outlet,
    Link,
    useLocation,
  } from 'react-router-dom';


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation(); // додаємо доступ до параметрів поточного URL


    useEffect(() => {
        const getMovie = async () => {
          const currentMovie = await getMovieDetails(movieId);
          setMovie(currentMovie);
        };
    
        getMovie();
      }, [movieId]);


    //   const onGoBack = () => {
    //     history.push(location?.state?.from?.location ?? '/movies');
    //   };
    return (
    <div  className={css.movieDet_container}>
    {!movie ? (
    <div>This movie is not found</div>
    ) : (
        <>
         <Link to={location?.state?.from ?? '/'}>
         <button className={css.movieDet_btn}>&#129032; Go back</button>
         </Link>
        <div className={css.movieDet_block}>
            <img src={ movie.poster_path
                       ? IMAGE_URL + movie.poster_path
                       : `https://bitsofco.de/content/images/2018/12/broken-1.png`}
                       alt={movie.title}  width="350"/>
            <div className={css.movieDet_infoBlock}>
                <h2 className={css.movieDet_title}>{movie.title}</h2>
                <p className={css.movieDet_userScore}>User Score: {`${Math.round(movie.vote_average*10)}`}% </p>
                <h3 className={css.movieDet_pre_title}>Overview</h3>
                <p className={css.movieDet_text}>{`${movie.overview}`}</p>
                <h3 className={css.movieDet_pre_title}>Genres</h3>
                <p className={css.movieDet_text}>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
            </div>
        </div>
        </>

    )}
            <div className={css.movieDet_additional_block}>
                <hr className={css.movieDet_line} />
                <h3 className={css.movieDet_pre_title}>Additional information</h3>
                <ul className={css.movieDet_link}>
                    <li><Link to="cast"    state={{ from: location?.state?.from ?? '/' }}><button className={css.movieDet_btn}>&#9660; Cast</button></Link></li>
                    <li><Link to="reviews" state={{ from: location?.state?.from ?? '/' }}><button className={css.movieDet_btn}>&#9660; Reviews</button></Link></li>
                </ul>
            </div>
            <Suspense fallback={<Loader />}>
            <Outlet />
            </Suspense>
                
    </div>
    )}
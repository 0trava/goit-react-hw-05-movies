import css from "./MovieDetails.module.css";
import Loader from '../../../components/Loader/Loader';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetails, IMAGE_URL } from '../../../services/movies-api';
import {
    Route,
    Routes,
    useParams,
    Outlet,
    Link,
    // useMatch,
    // useLocation,
    // useNavigate,
  } from 'react-router-dom';


const MovieReview = lazy(() =>import('../Reviews/Reviews' /* webpackChunkName:"MovieReview" */));
const MovieCastView = lazy(() =>import('../cast/Cast' /* webpackChunkName:"MovieCastView" */));

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    // const history = useNavigate();
    // const location = useLocation();
    // const { url, path } = useMatch();
    console.log("start");


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
        <button  
        // onClick={onGoBack} 
        className={css.movieDet_btn}>&#129032; Go back</button>
        <div className={css.movieDet_block}>
            <img src={ movie.poster_path
                       ? IMAGE_URL + movie.poster_path
                       : `https://bitsofco.de/content/images/2018/12/broken-1.png`}
                       alt={movie.title} />
            <div className={css.movieDet_infoBlock}>
                <h2 className={css.movieDet_title}>{movie.title}</h2>
                <p className={css.movieDet_userScore}>User Score: {`${movie.vote_average * 10}`}% </p>
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
                    <li><Link/>Cast</li>
                    <li><Link />Reviews</li>
                </ul>
            </div>

                <Outlet/>
    </div>
    )}
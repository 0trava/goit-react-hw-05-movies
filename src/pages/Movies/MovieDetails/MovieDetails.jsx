import { Outlet } from 'react-router-dom';
import css from "./MovieDetails.module.css";


const MovieDetails = (id) => {
    console.log("start");
    return (
     <>
        <button className={css.movieDet_btn}>&#129032; Go back</button>
        <div className={css.movieDet_block}>
            <img src="https://harrypotter.org.ua/wa-data/public/shop/products/54/53/25354/images/38982/38982.750x0.jpg" alt="" />
            <div className={css.movieDet_infoBlock}>
                <h2 className={css.movieDet_title}>Title</h2>
                <p className={css.movieDet_userScore}><span>User Score:</span> 50% </p>
                <h3 className={css.movieDet_pre_title}>Overview</h3>
                <p className={css.movieDet_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h3 className={css.movieDet_pre_title}>Genres</h3>
                <p className={css.movieDet_text}>Drama, History, War</p>
            </div>
        </div>
            <div className={css.movieDet_additional_block}>
                <hr className={css.movieDet_line} />
                <h3 className={css.movieDet_pre_title}>Additional information</h3>
                <ul className={css.movieDet_link}>
                    <li><link to =""/>Cast</li>
                    <li><link to ="" />Reviews</li>
                </ul>
            </div>

        <Outlet/>

     </>

    )


}

export default MovieDetails;
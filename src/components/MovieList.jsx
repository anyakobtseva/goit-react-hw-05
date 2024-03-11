import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { nanoid } from "nanoid";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../moviesApi";
const fallbackImageUrl = new URL('../movie.png', import.meta.url).href;

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div className={css.container}>
      {movies.map((movie) => {
        return (
          <div key={nanoid()} className={css.cardWrapper}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={IMAGE_BASE_URL + IMAGE_SIZE + movie.backdrop_path}
                alt={movie.title}
                className={css.image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src=fallbackImageUrl;
                }}
              />
              <h3 className={css.movieName}>{movie.title}</h3>
              <p className={css.movieName}>Score: {movie.vote_average}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

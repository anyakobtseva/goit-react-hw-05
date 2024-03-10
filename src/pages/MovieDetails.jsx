import { Suspense, useEffect, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { getMovieById, IMAGE_BASE_URL, IMAGE_SIZE } from "../moviesApi";
import css from "./MovieDetails.module.css";
import Loader from "../components/Loader";
import { nanoid } from "nanoid";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    (async () => {
      setMovie((await getMovieById(movieId)).data);
    })();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div className={css.list}>
        <div>
          <img
            src={IMAGE_BASE_URL + IMAGE_SIZE + movie.poster_path}
            alt={movie.title}
            className={css.poster}
          />
        </div>
        <div className={css.details}>
          <h2>Movie - {movie.title}</h2>
          <h3>Score: {movie.vote_average}</h3>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map((genre) => (
              <li key={nanoid()}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.infoadditional}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

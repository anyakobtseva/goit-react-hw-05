import { useState, useEffect, lazy } from "react";
import { getTrendingMovies, notify } from "../moviesApi";
import Loader from "../components/Loader";
const MovieList = lazy(() => import("../components/MovieList"));

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = (await getTrendingMovies()).data;
        if (response.total_results === 0) {
          throw Error("No trending movies today");
        }
        setTrendingMovies((previousMovies) =>
          JSON.stringify(previousMovies) != JSON.stringify(response.results)
            ? response.results
            : previousMovies
        );
      } catch (e) {
        notify(e.message);
      }
    })();
  });

  return (
    <>
      {trendingMovies.length != 0 ? (
        <MovieList movies={trendingMovies} />
      ) : (
        <Loader />
      )}
    </>
  );
}

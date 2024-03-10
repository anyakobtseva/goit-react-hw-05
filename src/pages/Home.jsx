import { useState, useEffect, lazy } from "react";
import { getTrendingMovies } from "../moviesApi";
import Loader from "../components/Loader";
const MoviesList = lazy(() => import('../components/MoviesList'))

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = (await getTrendingMovies()).data;
        if (response.total_results != 0) {
          setTrendingMovies((previousMovies) => {
            if (
              JSON.stringify(previousMovies) != JSON.stringify(response.results)
            ) {
              return response.results;
            } else {
              return previousMovies;
            }
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <>
      {trendingMovies.length != 0 ? (
        <MoviesList movies={trendingMovies} />
      ) : (
        <Loader />
      )}
    </>
  );
}

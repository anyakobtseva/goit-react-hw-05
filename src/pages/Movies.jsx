import { lazy, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { getMovies } from "../moviesApi";

const MoviesList = lazy(() => import("../components/MoviesList"));
const LoadMoreBtn = lazy(() => import("../components/LoadMoreBtn"));

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    (async () => {
      try {
        const response = (
          await getMovies(searchParams.get("name"), currentPage)
        ).data;
        if (response.total_results != 0) {
          setIsMore(response?.total_pages > currentPage);
          setMovies((previousMovies) => {
            if (
              JSON.stringify(previousMovies) != JSON.stringify(response.results)
            ) {
              return [...previousMovies, ...response.results];
            } else {
              return previousMovies;
            }
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [searchParams, currentPage]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setMovies([])
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox
        value={searchParams.get("name")}
        onSubmit={updateQueryString}
      />
      <MoviesList movies={movies} />
      {isMore && <LoadMoreBtn onclick={nextPage} />}
    </main>
  );
}

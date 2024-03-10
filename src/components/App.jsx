import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { AppBar } from "./Navigation";
import css from "./App.module.css";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Reviews = lazy(() => import("./MovieReviews"));
const Cast = lazy(() => import("./MovieCast"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <AppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

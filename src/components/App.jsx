import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AppBar } from "./Navigation";
import css from "./App.module.css";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast"));
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
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              background: "grey",
              color: "#fff",
            },
          }}
        />
    </div>
  );
};

export default App;

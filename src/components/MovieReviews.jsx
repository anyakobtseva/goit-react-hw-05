import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../moviesApi";
import { nanoid } from "nanoid";
import css from "./MovieReviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = (await getReviewsById(movieId)).data;
        if (response.results) setReviews(response.results);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [movieId]);

  return (
    <div className={css.review}>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <div key={nanoid()}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        <p>We do not have any reviews for the movie</p>
      )}
    </div>
  );
}

import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getCastById, IMAGE_BASE_URL, IMAGE_SIZE } from "../moviesApi";
import css from "./MovieCast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useMemo(() => {
    (async () => {
      const response = (await getCastById(movieId)).data;
      if (response) setCast(response.cast);
    })();
  }, [movieId]);

  return (
    <div className={css.infocast}>
      {cast.map((cast) => {
        if (!cast.profile_path) {
          return;
        }
        return (
          <div key={nanoid()} className={css.character}>
            <img
              src={IMAGE_BASE_URL + IMAGE_SIZE + cast.profile_path}
              className={css.cast}
              alt={cast.name}
            ></img>
            <p>• {cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        );
      })}
    </div>
  );
}

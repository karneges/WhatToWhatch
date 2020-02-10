import React, { Fragment } from "react";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";

const FilmOverview = () => {
  const {
    rating,
    scores_count: score,
    description,
    director,
    starring
  } = useCurrentFilm();
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__count">{score} votes</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director:{director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>{starring.join(" ,")}</strong>
        </p>
      </div>
    </Fragment>
  );
};

export default FilmOverview;

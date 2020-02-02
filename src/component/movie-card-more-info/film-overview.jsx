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
      <div class="movie-rating">
        <div class="movie-rating__score">{rating}</div>
        <p class="movie-rating__meta">
          <span class="movie-rating__count">{score} votes</span>
        </p>
      </div>

      <div class="movie-card__text">
        <p>{description}</p>
        <p class="movie-card__director">
          <strong>Director:{director}</strong>
        </p>

        <p class="movie-card__starring">
          <strong>{starring.join(" ,")}</strong>
        </p>
      </div>
    </Fragment>
  );
};

export default FilmOverview;

import React from "react";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";

const FilmDetails = () => {
  const { director, starring, run_time: runTime,genre,released } = useCurrentFilm();

  const getRunTime = () => {
    const hours = Math.floor(runTime / 60);
    const minutes = runTime % 60;
    return `${hours}h ${minutes}m`;
  };
  return (
    <div class="movie-card__text movie-card__row">
      <div class="movie-card__text-col">
        <p class="movie-card__details-item">
          <strong class="movie-card__details-name">Director</strong>
          <span class="movie-card__details-value">{director}</span>
        </p>
        <p class="movie-card__details-item">
          <strong class="movie-card__details-name">Starring</strong>
          <span class="movie-card__details-value">{starring.join(" ")}</span>
        </p>
      </div>

      <div class="movie-card__text-col">
        <p class="movie-card__details-item">
          <strong class="movie-card__details-name">Run Time</strong>
          <span class="movie-card__details-value">{getRunTime()}</span>
        </p>
        <p class="movie-card__details-item">
          <strong class="movie-card__details-name">Genre</strong>
          <span class="movie-card__details-value">{genre}</span>
        </p>
        <p class="movie-card__details-item">
          <strong class="movie-card__details-name">Released</strong>
          <span class="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

export default FilmDetails;

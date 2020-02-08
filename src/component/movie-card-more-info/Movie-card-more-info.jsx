import React from "react";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";
import FilmOverview from "./film-overview";
import FilmDetails from "./film-details";
import FilmReview from "./film-review";

const MovieCardMoreInfo = ({ filterState }) => {
  const { background_color: backgroundColor } = useCurrentFilm();

  const getTab = () => {
    switch (filterState[0]) {
      case "overviewFilm":
        return <FilmOverview />;
      case "detailsFilm":
        return <FilmDetails />;
      case "reviewsFilm":
        return <FilmReview />;

      default:
        return null;
    }
  };

  return (
    <section
      class="movie-card movie-card--full"
      style={{ backgroundColor: backgroundColor }}
    >
      <div class="movie-card__wrap movie-card__translate-top">
        <div class="movie-card__info">
          <div class="movie-card__desc">{getTab()}</div>
        </div>
      </div>
    </section>
  );
};

export default MovieCardMoreInfo;

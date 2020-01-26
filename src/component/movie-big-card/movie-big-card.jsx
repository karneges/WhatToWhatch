import React from "react";
import { withRouter } from "react-router-dom";

const MovieBigCard = ({ match, dataFilms }) => {
  const currentFilm = dataFilms[match.params.id - 1];
  const {
    name: title,
    genre,
    released: year,
    poster_image: posterImage
  } = currentFilm;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{year}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use href="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(MovieBigCard);

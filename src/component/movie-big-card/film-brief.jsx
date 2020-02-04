import React from "react";
import ActionButton from "../buttons/action-button";
import { useEffect } from "react";
import "./film-brief.scss";
import useShowMoreClasses from "./hooks/use-show-more-classes";

const FilmBrief = ({
  posterImage,
  title,
  genre,
  year,
  iconClasses,
  addFilmHandler,
  history,
  showMoreHandler,
  showVideoHandler
}) => {

  const {
    classCardPoster,
    classMovieCardInfo,
    classShowMoreArrow,
    setShowMoreState
  } = useShowMoreClasses();

  useEffect(() => {
    if (history.location.pathname.includes("/film")) {
      setShowMoreState(true);
    } else {
      setShowMoreState(false);
    }
  }, [history.location.pathname, setShowMoreState]);

  return (
    <div className="movie-card__wrap">
      <div className={classCardPoster}>
        <img src={posterImage} alt={title} width="218" height="327" />
      </div>
      <div className={classMovieCardInfo}>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{year}</span>
          </p>

          <div className="movie-card__buttons">
            <ActionButton
              clickHandler={showVideoHandler}
              iconClass={"fa fa-lg fa-play-circle-o"}
              title={"Play"}
            />
            <ActionButton
              iconClass={iconClasses}
              title={"My list"}
              clickHandler={addFilmHandler}
            />
            <ActionButton
              iconClass={classShowMoreArrow}
              title={"Show More"}
              clickHandler={showMoreHandler}
            />
          </div>
        </div>
      </div>
      {/* <button onClick={showMoreHandler}>btn</button> */}
    </div>
  );
};

export default FilmBrief;

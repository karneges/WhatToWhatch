import React from "react";
import ActionButton from "../buttons/action-button";
import { useState } from "react";
import { useEffect } from "react";


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



  const [state, setState] = useState(false);
  let _class = !state
    ? "movie-card__poster"
    : "movie-card__poster movie-card__poster_more";
  let _class2 = !state
    ? "movie-card__info"
    : "movie-card__info movie-card__info_more";

  useEffect(() => {
    if (history.location.pathname.includes("/film")) {
      setState(true);
    }
    else{
      setState(false)
    }
    
  }, [history.location.pathname]);



  return (
    <div className="movie-card__wrap">
      <div className={_class}>
        <img src={posterImage} alt={title} width="218" height="327" />
      </div>
      <div className={_class2}>
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
            <ActionButton iconClass={iconClasses}
            title={"Show More"}
            clickHandler={showMoreHandler}/>
          </div>
        </div>
      </div>
      {/* <button onClick={showMoreHandler}>btn</button> */}
    </div>
  );
};

export default FilmBrief;

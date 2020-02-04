import React from "react";
import classNames from "classnames";
import { useState } from "react";

const useShowMoreClasses = () => {
  const [showMoreState, setShowMoreState] = useState(false);

  const classCardPoster = classNames({
    "movie-card__poster": !showMoreState,
    "movie-card__poster movie-card__poster_more": showMoreState
  });
  const classMovieCardInfo = classNames({
    "movie-card__info": !showMoreState,
    "movie-card__info movie-card__info_more": showMoreState
  });
  const classShowMoreArrow = classNames({
    "fa fa-arrow-down fa-lg": !showMoreState,
    "fa fa-arrow-down active fa-lg": showMoreState
  });

  return {
    classCardPoster,
    classMovieCardInfo,
    classShowMoreArrow,
    setShowMoreState
  };
};

export default useShowMoreClasses;

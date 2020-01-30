import React, { Fragment } from "react";
import { withRouter, useParams, useLocation } from "react-router-dom";
import classNames from "classnames";
import FilmBrief from "./film-brief";
import BackgroundImage from "../background-image/background-image";
import {
  addFilmOnMyList,
  deleteFilmOnMyList
} from "../../action/action-creater";
const MovieBigCard = ({ match, history, dataFilms, dispatch, myFilmList }) => {
  const getIdentificator = () => {
    return Object.values(match.params).filter(item => item > 0)[0];
  };
  const currentFilm = dataFilms[getIdentificator() - 1] || dataFilms[0];


  const {
    id,
    name: title,
    genre,
    released: year,
    poster_image: posterImage,
    background_image: backgroundimage
  } = currentFilm;

  const isAdd = myFilmList.find(item => item.id === id);

  const iconClasses = classNames({
    "fa fa-lg fa-plus": !isAdd,
    "fa fa-lg fa-check": isAdd
  });
  const addFilmHandler = () => {
    if (!isAdd) {
      dispatch(addFilmOnMyList(currentFilm));
    }
    if (isAdd) {
      dispatch(deleteFilmOnMyList(currentFilm));
    }
  };
  
  const getUrlFromChangeInfo = () => {
    if (!match.url.includes("film")) {
      return `/film/${(getIdentificator() || 1)}`;
    }
    return `/${getIdentificator()}`;
  };

  const showMoreHandler = () => history.push(getUrlFromChangeInfo());


  return (
    <Fragment>
      <BackgroundImage image={backgroundimage} />
      <FilmBrief
        showMoreHandler={showMoreHandler}
        history={history}
        addFilmHandler={addFilmHandler}
        posterImage={posterImage}
        genre={genre}
        year={year}
        title={title}
        iconClasses={iconClasses}
      />
    </Fragment>
  );
};
export default withRouter(MovieBigCard);

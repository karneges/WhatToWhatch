import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import FilmBrief from "./film-brief";
import BackgroundImage from "../background-image/background-image";
import {
  addFilmOnMyList,
  deleteFilmOnMyList
} from "../../action/action-creater";
const MovieBigCard = ({ match, history, dataFilms, dispatch, myFilmList }) => {
  const currentFilm = dataFilms[match.params.id - 1] || dataFilms[0];
  const {
    id,
    name: title,
    genre,
    released: year,
    poster_image: posterImage,
    background_image: backgroundimage
  } = currentFilm;
  console.log(backgroundimage);

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
    if(!match.path.includes('/film')){
      return `/film/${match.params.id}`
    }
    return `/${match.params.id}`
  }



  const showMoreHandler = () => history.push(getUrlFromChangeInfo())
  console.log(match);
  
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

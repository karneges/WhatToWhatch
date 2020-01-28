import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import FilmBrief from "./film-brief";
import BackgroundImage from "../background-image/background-image";
import { addFilmOnMyList,deleteFilmOnMyList } from "../../action/action-creater";
const MovieBigCard = ({ match, dataFilms, dispatch, myFilmList }) => {
  const currentFilm = dataFilms[match.params.id - 1] || dataFilms[0];
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
    if(!isAdd){
      dispatch(addFilmOnMyList(currentFilm));
    }
    if(isAdd){
      dispatch(deleteFilmOnMyList(currentFilm))
    }
   
  };

  return (
    <Fragment>
      <BackgroundImage image={backgroundimage} />
      <FilmBrief
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

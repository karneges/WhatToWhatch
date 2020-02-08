import React, { Fragment } from "react";
import { withRouter, useHistory, useRouteMatch } from "react-router-dom";
import classNames from "classnames";
import FilmBrief from "./film-brief";
import BackgroundImage from "../background-image/background-image";
import {
  addFilmOnMyList,
  deleteFilmOnMyList
} from "../../action/action-creater";
import VideoPlayer from "../video-player/video-player";
import { getUrlFromChangeInfo } from "../../utils/utils";
import { useState } from "react";
import useUsersService from "../../hooks/useUsersService";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";


const MovieBigCard = ({ dispatch, myFilmList }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const currentFilm = useCurrentFilm()
  const { addUserContent } = useUsersService();
  const {
    id,
    name: title,
    genre,
    released: year,
    poster_image: posterImage,
    background_image: backgroundimage,
    video_link: video
  } = currentFilm;
  
  const [isVideo, setIsVideo] = useState(false);

  const isAdd = Array.from(myFilmList).find(item => item.id === id);

  const iconClasses = classNames({
    "fa fa-lg fa-plus": !isAdd,
    "fa fa-lg fa-check": isAdd
  });
  const togleFilmOnMyListHandler = () => {
    if (!isAdd) {
      dispatch(addFilmOnMyList(currentFilm));
      addUserContent();
    }
    if (isAdd) {
      dispatch(deleteFilmOnMyList(currentFilm));
      addUserContent();
    }
  };

  const showMoreHandler = () =>
    history.push(getUrlFromChangeInfo(currentFilm, match));

  const togleVideoHandler = () => {
    setIsVideo(s => !s);
  };

  return (
    <Fragment>
      {isVideo && (
        <VideoPlayer
          video={video}
          text={`text`}
          onCloseHandler={togleVideoHandler}
        />
      )}
      <BackgroundImage image={backgroundimage} />
      <FilmBrief
        showVideoHandler={togleVideoHandler}
        showMoreHandler={showMoreHandler}
        history={history}
        addFilmHandler={togleFilmOnMyListHandler}
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

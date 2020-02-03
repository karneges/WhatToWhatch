import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { timer } from "../../utils/utils";

const MovieCard = ({ image, FilmName, id, video,genre }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    let timerId = "";
    if (isVideo) {
      timerId = timer(setPlayVideo);
    }
    return () => {
      setPlayVideo(false);
      clearInterval(timerId);
    };
  }, [isVideo]);

  const VideoState = ({ video }) => {
    return (
      <video
        className="small-movie-card__image"
        autoPlay={true}
        controls={false}
      >
        <source src={video}  type="video/mp4" />
      </video>
    );
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setIsVideo(true)}
      onMouseLeave={() => setIsVideo(false)}
    >
      {playVideo && <VideoState video={video} />}
      {!playVideo && (
        <Fragment>
          <div className="small-movie-card__image">
            <img src={image} alt={FilmName} width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <Link
              to={`/${id}`}
              className="small-movie-card__link"
            >
              {FilmName}   {genre}
            </Link>
          </h3>
        </Fragment>
      )}
    </article>
  );
};

export default MovieCard;

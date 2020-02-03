import React from "react";
import "./video-player.scss";

const VideoPlayer = ({ video, onCloseHandler }) => {

  const keyCloseVideo = e => {
    if (e.keyCode === 27) {
      onCloseHandler();
    }
  };
  return (
    <>
      <div onKeyDown={keyCloseVideo} className="overlay" tabIndex={1}>
        <div className="modal">
          <div className="modal__close" onClick={onCloseHandler}>
            &times;
          </div>
          <video className="video_player" autoPlay={false} controls={true}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

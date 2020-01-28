import React from 'react';
import ActionButton from '../buttons/action-button';

const FilmBrief = ({posterImage,title,genre,year,iconClasses,addFilmHandler}) => {
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
          <ActionButton
            iconClass={"fa fa-lg fa-play-circle-o"}
            title={"Play"}
          />
          <ActionButton 
          iconClass={iconClasses} 
          title={"My list"} 
          clickHandler={addFilmHandler} />
        </div>
      </div>
    </div>
  </div>
  )
  }
  


export default FilmBrief;
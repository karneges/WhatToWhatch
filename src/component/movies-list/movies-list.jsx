import React from 'react';
import MovieCard from './movie-card';
import { withRouter } from 'react-router-dom';

const MovieList = (props) => {
  const movieList = props.dataFilms.map(film => {
    return <MovieCard 
    id={film.id}
    key={film.id}
    FilmName={film.name} 
    image={film.preview_image}
    video={film.preview_video_link} />;
  });
  return (
    <div className="catalog__movies-list">
      {movieList}
      </div>
  )
};

export default withRouter(MovieList);
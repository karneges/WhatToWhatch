/* eslint-disable eqeqeq */
import React from "react";
import MovieCard from "./movie-card";


const MovieList = ({ dataFilms, filter=[] }) => {
  
  const movieList = dataFilms.map(film => {
    if (filter.includes(film.genre) || filter==false) {
      return (
        <MovieCard
          id={film.id}
          key={film.id}
          FilmName={film.name}
          image={film.preview_image}
          video={film.preview_video_link}
          genre={film.genre}
        />
      );
    }

    return null;
  });
  return <div className="catalog__movies-list">{movieList}</div>;
};

export default MovieList;

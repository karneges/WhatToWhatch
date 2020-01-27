import React from "react";
import MovieCard from "./movie-card";
import { withRouter } from "react-router-dom";

const MovieList = ({ dataFilms, filter=["allGenre"] }) => {
  console.log(filter);
  
  const movieList = dataFilms.map(film => {
    if (filter.includes(film.genre)||filter[0]==="allGenre") {
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

export default withRouter(MovieList);

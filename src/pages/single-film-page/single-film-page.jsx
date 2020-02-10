import React, { Fragment } from "react";
import "./single-film-page.css";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import { useState } from "react";
import FilterTabs from "../../component/tabs-filter/tabs-filter";
import Loading from "../../component/loading/loading";
import MovieCardMoreInfo from "../../component/movie-card-more-info/Movie-card-more-info";
import MovieList from "../../component/movies-list/movies-list";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";

const SinglePageFilm = () => {
  const [globalState] = useContext(FilmContext);
  const { films, loading} = globalState;
  const currentFilm = useCurrentFilm();
  const FilterButtons = [
    { Overview: ["overviewFilm"] },
    { Details: ["detailsFilm"] },
    { Reviews: ["reviewsFilm"] }
  ];

  const [filterState, setFilterState] = useState(["overviewFilm"]);

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <FilterTabs
          filter={filterState}
          setFilter={setFilterState}
          buttons={FilterButtons}
          className={"movie-nav__list"}
        />
      </nav>

      {loading && <Loading />}
      {!loading && films && (
        <Fragment>
          <MovieCardMoreInfo filterState={filterState} />
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <MovieList
                dataFilms={films}
                filter={currentFilm.genre}
                countFilms={4}
              />
            </section>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SinglePageFilm;

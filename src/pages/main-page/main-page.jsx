/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";

import Loading from "../../component/loading/loading";
import MovieList from "../../component/movies-list/movies-list";
import MovieBigCard from "../../component/movie-big-card/movie-big-card";
import BackgroundImage from "../../component/background-image/background-image";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import { fetchingBooks } from "../../action/action-creater";
import { useState } from "react";
import FilterTabs from "../../component/tabs-filter/tabs-filter";

const MainPage = ({ match }) => {
  const [store, dispatch] = useContext(FilmContext);
  const { films, loading, error } = store;
  const [filter, setFilter] = useState(`allGeners`);

  useEffect(() => {
    fetchingBooks(dispatch);
  }, [dispatch]);

  return (
    <Fragment>
      <div className="visually-hidden">
        <title>+</title>
        <title>Artboard</title>
      </div>

      <section className="movie-card">
        {loading && <Loading />}
        {!loading && films !== null && (
          <BackgroundImage
            image={films[match.params.id - 1].background_image}
          />
        )}

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div>
        </header>
        {loading && <Loading />}
        {!loading && films !== null && <MovieBigCard dataFilms={films} />}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilterTabs setFilter={setFilter} />
          {loading && <Loading />}
          {!loading && films !== null && (
            <MovieList dataFilms={films} filter={filter} />
          )}

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default MainPage;

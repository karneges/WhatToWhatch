/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";

import { useEffect } from "react";
import useFetch from "../../services/api-service";
import Loading from "../../component/loading/loading";
import MovieList from "../../component/movies-list/movies-list";
import MovieBigCard from "../../component/movie-big-card/movie-big-card";
import BackgroundImage from "../../component/background-image/background-image";

const MainPage = ({ match }) => {
  const [dataFilms, setDataFilms] = useState(null);
  const [{ isLoading, response, error }, doFetch] = useFetch();

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  useEffect(() => {
    setDataFilms(response);
  }, [response]);

  return (
    <Fragment>
      <div className="visually-hidden">
        <title>+</title>
        <title>Artboard</title>
      </div>

      <section className="movie-card">
        {isLoading && <Loading />}
        {!isLoading && dataFilms !== null && (
          <BackgroundImage
            image={dataFilms[match.params.id - 1].background_image}
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
        {isLoading && <Loading />}
        {!isLoading && dataFilms !== null && (
          <MovieBigCard dataFilms={dataFilms} />
        )}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          {isLoading && <Loading />}
          {!isLoading && dataFilms !== null && (
            <MovieList dataFilms={dataFilms} />
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

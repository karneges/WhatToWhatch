/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";

import Loading from "../../component/loading/loading";
import MovieBigCard from "../../component/movie-big-card/movie-big-card";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import { fetchingBooks } from "../../action/action-creater";
import './style.css'
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useCurrentFilm } from "../../hooks/useCurrentFilm";

const MainPage = ({children}) => {
  const [globalState, dispatch] = useContext(FilmContext);
  const { films, loading, error,myFilmList } = globalState;
   const currentFilm = useCurrentFilm()


  return (
    <Fragment>
      <section className="movie-card">
        <Header />
        {loading && <Loading />}
        {!loading && films !== null && <MovieBigCard 
        myFilmList={myFilmList}
        currentFilm={currentFilm}
        dispatch={dispatch} />}
      </section>
      <div className="page-content">
        {children({loading,films})}
        <Footer />
      </div>
      
    </Fragment>
  );
};

export default MainPage;

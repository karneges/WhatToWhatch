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
import MainCatalog from "../../component/main-catalog/main-catalog";

const MainPage = ({children}) => {
  const [globalState, dispatch] = useContext(FilmContext);
  const { films, loading, error,myFilmList } = globalState;
  console.log(myFilmList);
   
  useEffect(() => {

    fetchingBooks(dispatch);
  }, [dispatch]);

  return (
    <Fragment>
      <section className="movie-card">
        <Header />
        {loading && <Loading />}
        {!loading && films !== null && <MovieBigCard 
        myFilmList={myFilmList}
        dataFilms={films}
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

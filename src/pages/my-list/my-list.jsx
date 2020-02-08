import React, { Fragment } from "react";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import MovieList from "../../component/movies-list/movies-list";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import useCheckUser from "../../hooks/useCheckUser";

const MyList = () => {
  const [globalState] = useContext(FilmContext);
  const { user } = globalState;
  const myFilmList  = user ? user.userContent.myFilmList :[]
  useCheckUser()
  return (
    <Fragment>
      <div className="user-page">
        <Header headerTitle={"My list"} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MovieList dataFilms={myFilmList} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default MyList;

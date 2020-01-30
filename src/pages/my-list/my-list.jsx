import React, { Fragment } from 'react';
import Footer from '../../component/footer/footer';
import Header from '../../component/header/header';
import MovieList from '../../component/movies-list/movies-list';
import { useContext } from 'react';
import { FilmContext } from '../../contexts/film-context-service';
import { fetchingBooks } from '../../action/action-creater';
import { useEffect } from 'react';

const MyList = ({state}) => {
  const [globalState, dispatch] = useContext(FilmContext);
  const { myFilmList } = globalState;


  
  return (
    <Fragment>

    <div className="user-page">
<Header headerTitle={'My list'}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList dataFilms={myFilmList}/>
      </section>

<Footer/>
    </div>
  </Fragment>
  )
}

export default MyList;
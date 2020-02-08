import React from "react";
import { Link, useRouteMatch} from "react-router-dom";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import {
  myFilmListPage,
  signIn,
  mainPage
} from "../../constance/rote-constance";
import useLocalStorage from "../../hooks/useLocalStorage";
import { userLogaut } from "../../action/action-creater";
import { useEffect } from "react";

const Header = ({ headerTitle }) => {
  const [,setToken] = useLocalStorage(`userToken`)
  const [{ user },dispatch] = useContext(FilmContext);
  let logaut = false;
  const match = useRouteMatch();
  if (match.path === myFilmListPage) {
    logaut = true;
  }
const onLogaut = () => {
  dispatch(userLogaut())
}

useEffect(()=>{
  if(user==='') {
    setToken('')
  }
},[setToken, user])


  const headerClass = headerTitle
    ? "page-header user-page__head"
    : "page-header movie-card__head";

  return (
    <header className={headerClass}>
      <div className="logo">
        <Link to={mainPage} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {headerTitle && (
        <h1 className="page-title user-page__title">{headerTitle}</h1>
      )}
      {user && !logaut && (
        <Link to={myFilmListPage} className="user-block">
          <div className="user-block__avatar">
            {user && user.userData.userName.toUpperCase()[0]}
          </div>
        </Link>
      )}

      {!user && (
        <Link to={signIn} className="user-block__link">
          Sign in
        </Link>
      )}
      {logaut &&
        <Link 
        onClick={onLogaut}
        to={mainPage} className="user-block__link">
          Logaut
        </Link>
      }
    </header>
  );
};

export default Header;

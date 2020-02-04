import React from "react";
import Footer from "../../component/footer/footer";
import { getUserData } from "../../services/api-users";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import useCurrentUserCheker from "../../hooks/useCurrenUserCheker";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const Authorization = () => {
  const [userToken] = useLocalStorage(`userToken`)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [globalData] = useContext(FilmContext);

  const { checkingUser } = useCurrentUserCheker();

  const onSubmitHendler = e => {
    e.preventDefault();
    checkingUser(email, password);
  };
  useEffect(() => {
    if (globalData.user) {
      setEmail("");
      setPassword("");
    }
  }, [globalData.user]);

  console.log(userToken);
  
  if(  userToken) {
    return <Redirect to='/'/>
  }
  
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={onSubmitHendler} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <label
                className="sign-in__label visually-hidden"
                for="user-email"
              ></label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <label
                className="sign-in__label visually-hidden"
                for="user-password"
              ></label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Authorization;

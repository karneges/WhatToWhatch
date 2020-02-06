import React from "react";
import Footer from "../../component/footer/footer";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FilmContext } from "../../contexts/film-context-service";
import useUsersService from "../../hooks/useUsersService";
import { Redirect, useRouteMatch, Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./authorization.scss";

const Authorization = () => {
  const [, setUserToken] = useLocalStorage(`userToken`);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [islogin, setIsLogin] = useState(false);
  const [{ user, userError }] = useContext(FilmContext);
  const match = useRouteMatch();
  const { checkingUser, registerUser } = useUsersService();
  const [isSignUp, setIsSignUp] = useState(false);

/// Добавить события ошибки ,добавить константы с сообщениями ,
// добавить проверку на существование юзера,
// Добавить редиректы после регистрации 
  useEffect(() => {
    if (match.path === "/signup") {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }, [match.path]);

  const onLoginHandler = e => {
    e.preventDefault();
    checkingUser(userName, password);
  };

  const onRegisterHandler = e => {
    e.preventDefault();
    registerUser(userName, password);
  };

  useEffect(() => {
    if (user) {
      setUserName("");
      setPassword("");
      setUserToken(user.userData.userName);
      setIsLogin(true);
    }
  }, [setUserToken, user]);

  if (islogin) {
    return <Redirect to="/" />;
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
        {isSignUp ? (
          <h1 className="page-title user-page__title">Sign up</h1>
        ) : (
          <h1 className="page-title user-page__title">Sign in</h1>
        )}
      </header>

      <div className="sign-in user-page__content">
        <form
          onSubmit={isSignUp ? onRegisterHandler : onLoginHandler}
          action="#"
          className="sign-in__form"
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              {isSignUp ? (
                <Link to="/signin" className="register__link">
                  Have an acount?
                </Link>
              ) : (
                <Link to="/signup" className="register__link">
                  Need an acaunt?
                </Link>
              )}
              {userError && (
                <div className="sign-in__message">
                  <p>
                    We can’t recognize this email and password combination.
                    Please try again.
                  </p>
                </div>
              )}
              {isSignUp && (
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="Email"
                    placeholder="E-mail"
                    name="user-email"
                    id="user-email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              )}

              <input
                className="sign-in__input"
                placeholder="User name"
                name="user-email"
                id="user-email"
                onChange={e => setUserName(e.target.value)}
                value={userName}
              />
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
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              {isSignUp ? `Sign up` : `Sign in`}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Authorization;

import React from "react";
import { Link } from "react-router-dom";

const Header = ({ headerTitle }) => {
  const headerClass = headerTitle
    ? "page-header user-page__head"
    : "page-header movie-card__head";

  return (
    <header className={headerClass}>
      <div className="logo">
        <Link to='/' className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {headerTitle && (
        <h1 className="page-title user-page__title">{headerTitle}</h1>
      )}

      <Link to='/mylist' className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </Link>
    </header>

  );
};

export default Header;

import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from "classnames";
const FilterTabs = ({filter,setFilter}) => {
  const handler = value => {
    setFilter(...value)
  };
  // console.log(filter);

  // const iconClasses = classNames({
  //   "catalog__genres-item": Object.keys,
  //   "catalog__genres-item catalog__genres-item--active": isAdd
  // });
  
  const {url} = useRouteMatch()

  const buttons = [
    { "All genres": [""] },
    { Comedies: ["Comedy"] },
    { Crime: ["Crime"] },
    { Dramas: ["Drama"] },
    { Action: ["Action"] },
    { "Kids & Family": ["Fantasy", "Adventure"] },
    { Thrillers: ["Thriller"] }
  ];

  const FilterButtons = buttons.map((item, id) => {
    return (
      <li
      onClick={() => handler(Object.values(item))}
        key={id}
        className="catalog__genres-item catalog__genres-item--active"
      >
        <Link to={url} className="catalog__genres-link">
          {Object.keys(item)}
        </Link>
      </li>
    );
  });

  return <ul className="catalog__genres-list">{FilterButtons}</ul>;
};

export default FilterTabs;

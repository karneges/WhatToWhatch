import React from "react";
import { Link } from "react-router-dom";

const FilterTabs = ({setFilter}) => {
  const handler = value => {
    setFilter(...value)
  };

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
        <Link to='' className="catalog__genres-link">
          {Object.keys(item)}
        </Link>
      </li>
    );
  });

  return <ul className="catalog__genres-list">{FilterButtons}</ul>;
};

export default FilterTabs;

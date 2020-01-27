import React from "react";
import { Link } from "react-router-dom";

const FilterTabs = ({setFilter}) => {
  const handler = value => {
    setFilter(value[0])
  };

  const buttons = [
    { "All genres": ["allGenre"] },
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
        <a href="#" className="catalog__genres-link">
          {Object.keys(item)}
        </a>
      </li>
    );
  });

  return <ul className="catalog__genres-list">{FilterButtons}</ul>;
};

export default FilterTabs;

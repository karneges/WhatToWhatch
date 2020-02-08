import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const FilterTabs = ({filter,setFilter,buttons=[],className}) => {
  const handler = value => {
    setFilter(...value)
  };

const getActiveClass = (item) => {  
  // eslint-disable-next-line eqeqeq
  if (Object.values(item).toString() == [...filter]){
   return "catalog__genres-item catalog__genres-item--active" 
  }
  return "catalog__genres-item"
}


  const {url} = useRouteMatch()

  const FilterButtons = buttons.map((item, id) => {

    return (
      <li
      onClick={() => handler(Object.values(item))}
        key={id}
        className={getActiveClass(item)}
      >
        <Link to={url} className="catalog__genres-link">
          {Object.keys(item)}
        </Link>
      </li>
    );
  });

  return <ul className={className}>{FilterButtons}</ul>;
};

export default FilterTabs;

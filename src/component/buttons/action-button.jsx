import React from "react";

const ActionButton = ({ iconClass, title ,clickHandler}) => {
  return (
    <button
    onClick={clickHandler}
     className="btn btn--list movie-card__button" 
     type="button">
      <i className={iconClass}>&nbsp;</i>
      <span>{title}</span>
    </button>
  );
};

export default ActionButton;

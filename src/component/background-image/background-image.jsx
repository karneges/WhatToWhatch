import React from "react";

const BackgroundImage = ({image}) => {
  console.log(image);
  
  return (
    <div className="movie-card__bg">
      <img
        src={image}
        alt="The Grand Budapest Hotel"
      />
    </div>
  );
};
export default BackgroundImage;
import React from "react";

function MoviesItem({ image, name }) {
  return (
    <div className="moviesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default MoviesItem;

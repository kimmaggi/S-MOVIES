import React from "react";

function SeriesItem({ image, name }) {
  return (
    <div className="seriesItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default SeriesItem;

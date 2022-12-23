import React from "react";
import { SeriesList } from "../helpers/SeriesList";
import SeriesItem from "../components/SeriesItem";
import title2 from '../assets/title2.png'
import "../styles/Series.css";

function Series() {
  return (
    <div className="series">
      <div className="title" style={{ backgroundImage:`url(${title2})` }}>
        <h1 className="seriesTitle">Series</h1>
      </div>
      
      <div className="seriesList">
        {SeriesList.map((seriesItem, key) => {
          return (
            <SeriesItem
              key={key}
              image={seriesItem.image}
              name={seriesItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Series;

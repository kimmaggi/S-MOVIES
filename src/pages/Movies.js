import React from "react";
import { MoviesList } from "../helpers/MoviesList";
import MoviesItem from "../components/MoviesItem";
import "../styles/Movies.css";

import title from '../assets/title.png'

function Movies() {
  return (
    <div className="movies">
      <div className="title" style={{ backgroundImage:`url(${title})` }}>
        <h1 className="moviesTitle">Movies</h1>
      </div>
      <div className="moviesList">
        {MoviesList.map((moviesItem, key) => {
          return (
            <MoviesItem
              key={key}
              image={moviesItem.image}
              name={moviesItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;

import React from 'react';
import Movie from './Movie.jsx'

var MovieList = (props) => (
  <ul>
    {props.movies.map((movie, index) => 
      <Movie movie={movie} key={index}/>
    )}
  </ul>
);

export default MovieList;
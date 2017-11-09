import React from 'react';
import Movie from './Movie.jsx'

var MovieList = (props) => {
  if (props.movies.length < 1) {
    return <div className="no-match">No movies to display!</div>
  } else {
    return (<ul>
      {props.movies.map((movie, index) => 
        <Movie movie={movie} key={index}/>
      )}
    </ul>)
  }
};

export default MovieList;
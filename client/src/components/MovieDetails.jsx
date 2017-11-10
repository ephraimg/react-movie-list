import React from 'react';

var MovieDetails = (props) => {

    return (<div className="details">
      Year: {props.movie.year} <br/>
      IMDB Rating: {props.movie.imdbRating}<br/>
      Watched: <input type="checkbox" 
        onChange={props.toggleWatched}
        checked={props.watched}
        ></input>
    </div>)

}

export default MovieDetails;
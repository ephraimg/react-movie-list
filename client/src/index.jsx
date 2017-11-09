import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Search from './components/Search.jsx';
import MovieList from './components/MovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

var App = function() {
  return (
  <div>
    <h1>Movie List</h1>
    <MovieList movies={movies}/>
  </div>
)};

ReactDOM.render(<App />, document.getElementById('app'));
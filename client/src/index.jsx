import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Search from './components/Search.jsx';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      matches: this.props.movies
    };
    this.showMatches = this.showMatches.bind(this);
  } 
 
  showMatches(text) {
    var matches = [];
    this.state.movies.forEach(movie => {
      if (movie.title.toLowerCase().includes(text.toLowerCase())) {
        matches.push(movie);
      }
    })
    this.setState({matches: matches});
  }

  render() {
    return (
    <div>
      <h1>Movie List</h1>
      <Search movies={this.state.movies} showMatches={this.showMatches}/>
      <MovieList movies={this.state.matches}/>
    </div>
    )
  }
}

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
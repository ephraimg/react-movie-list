import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userMovies: props.sampleMovies,
      matches: props.sampleMovies,
      searchText: '',
    };
    this.showMatches = this.showMatches.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
  } 
 
  changeSearchText(e) {
    this.setState({searchText: e.target.value});
  }

  showMatches() {
    var matches = [];
    this.state.userMovies.forEach(movie => {
      if (movie.title.toLowerCase().includes(this.state.searchText.toLowerCase())) {
        matches.push(movie);
      }
    })
    this.setState({matches: matches});
    console.log(JSON.stringify(this.state.userMovies));
  }

  addMovie(text) {
    this.setState(
      {userMovies: this.state.userMovies.concat({title: text})}, 
      () => this.showMatches(this.state.searchText) 
    );
  }

  render() {
    return (
    <div>
      <h1>Movie List</h1>
      <Add addMovie={this.addMovie}/>
      <Search 
        movies={this.state.userMovies} 
        showMatches={this.showMatches}
        changeSearchText={this.changeSearchText}  
      />
      <MovieList movies={this.state.matches}/>
    </div>
    )
  }
}

var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(<App sampleMovies={sampleMovies}/>, document.getElementById('app'));
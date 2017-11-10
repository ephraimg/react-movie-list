import React from 'react';
import Movie from './Movie.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingWatched: false
    };
    this.toggleView = this.toggleView.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
  }

  toggleView() {
    this.setState({
      viewingWatched: !this.state.viewingWatched
    });
  }

  getStyleA() {
    return { 
      color: this.state.viewingWatched ? 'white' : 'black',
      backgroundColor: this.state.viewingWatched ? 'green' : 'lightGrey'
    }
  }

  getStyleB() {
    return { 
      color: this.state.viewingWatched ? 'black' : 'white',
      backgroundColor: this.state.viewingWatched ? 'lightGrey' : 'green'
    }
  }

  renderMovieList() {
    return this.props.movies.map((movie, index) => 
      <Movie 
        movie={movie} 
        key={index}
        viewingWatched={this.state.viewingWatched}
        toggleWatched={this.props.toggleWatched}
      />
    )
  }

  render() {
    
    if (this.props.movies.length < 1) {
      return (<div className="list">
        <div className="no-match">No movies to display!</div>
      </div>)
    } else {
      return (
        <div className="list">
          <div className="tab" style={this.getStyleB()} onClick={this.toggleView}>To watch</div>
          <div className="tab" style={this.getStyleA()} onClick={this.toggleView}>Watched</div>
          <ul>
          {this.renderMovieList()}
        </ul>
      </div>)
    }
  }
};

export default MovieList;
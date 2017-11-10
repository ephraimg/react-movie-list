import React from 'react';
import Movie from './Movie.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingWatched: true
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({
      viewingWatched: !this.state.viewingWatched
    }, ()=>console.log(this.state.viewingWatched))
  }

  getStyleA(boolean) {
    return { color: this.state.viewingWatched ? 'green' : 'grey'}
  }

  getStyleB(boolean) {
    return { color: this.state.viewingWatched ? 'grey' : 'green'}
  }

  render() {
    
    if (this.props.movies.length < 1) {
      return (<div className="list">
        <div className="no-match">No movies to display!</div>
      </div>)
    } else {
      return (
        <div className="list">
          <div className="tab" style={this.getStyleA()} onClick={this.toggleView}>To watch</div>
          <div className="tab" style={this.getStyleB()} onClick={this.toggleView}>Watched</div>
          <ul>
          {this.props.movies.map((movie, index) => 
            <Movie 
              movie={movie} 
              key={index}
              viewingWatched={this.state.viewingWatched}
              toggleWatched={this.props.toggleWatched}
            />
          )}
        </ul>
      </div>)
    }
  }
};

export default MovieList;
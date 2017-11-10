import React from 'react';
import MovieDetails from './MovieDetails.jsx';


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      viewingDetails: false
    };
    this.toggleWatched = this.toggleWatched.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }  

  toggleDetails() {
    this.setState({viewingDetails: !this.state.viewingDetails});
  }  

  toggleWatched() {
    this.setState({watched: !this.state.watched});
  } 

  getStyle() {
    return {
      color: this.state.watched ? 'grey' : 'green'
    }
  }

  render() {
    if ((this.state.watched === this.props.viewingWatched) || this.state.viewingDetails) { 
      return (<li> 
        <span 
          className="movie-title"
          onClick={this.toggleDetails}
        >{this.props.movie.title}</span>
        <button 
          style={this.getStyle()}
          className="watched-button"
          onClick={this.toggleWatched}
        >
          {this.state.watched ? 'Watched' : 'Unwatched'}
        </button>
        {this.state.viewingDetails ? 
          <MovieDetails movie={this.props.movie} 
            toggleWatched={this.toggleWatched}
            watched={this.state.watched}
          /> 
          : null
        }
      </li>);
    } else { 
      return null;
    }
  }

}

export default Movie;
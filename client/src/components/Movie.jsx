import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
    this.toggleWatched = this.toggleWatched.bind(this);
  }  
  
  toggleWatched() {
    this.setState({watched: !this.state.watched});
    console.log(this.props.movie.title, ' is watched? ', this.state.watched);
  } 

  getStyle() {
    return {
      color: this.state.watched ? 'grey' : 'green'
    }
  }

  render() {
    if (this.props.viewingWatched !== this.state.watched) {
      return (<li> 
        <span className="movie-title">{this.props.movie.title}</span>
        <button 
          style={this.getStyle()}
          className="watched-button"
          onClick={this.toggleWatched}
        >
          {this.state.watched ? 'Watched' : 'Unwatched'}
        </button>
      </li>);
    } else {
      return null;
    }
  }

}

export default Movie;
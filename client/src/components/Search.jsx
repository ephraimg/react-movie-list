import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (<div className="search">
      <button onClick={()=>this.props.showMatches(this.state.searchText)}>Search movies:
      </button>
      <input onChange={this.handleChange}/>
    </div>);
  }
}

export default Search;
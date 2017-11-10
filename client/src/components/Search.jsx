import React from 'react';

var Search = function(props) {

    return (<div className="search">
      <button onClick={props.showMatches}>
        Search movies:
      </button>
      <input onChange={props.changeSearchText}/>
    </div>);
}

export default Search;
import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      addText: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (<div className="search">
      <button onClick={() => this.props.addMovie(this.state.addText)}>
        Add a movie:
      </button>
      <input onChange={this.handleChange}/>
    </div>);
  }
}

export default Add;
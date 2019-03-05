import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    };
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
  }
  handleFirst(e) {
    this.setState({
      first: e.target.value
    });
  }
  handleLast(e) {
    this.setState({
      last: e.target.value
    });
  }
  render() {
    return (
      <div>
        {this.state.first} {this.state.last} <br />
        First: <input name="first" onChange={this.handleFirst} />
        <br />
        Last: <input name="last" onChange={this.handleLast} />
      </div>
    );
  }
}

export default App;

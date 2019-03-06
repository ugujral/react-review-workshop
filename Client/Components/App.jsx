import React from 'react';
import List from './List.jsx';

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
      <span>
        <div>Hello from component</div>
        <div>{this.state.first}</div>
        First: <input name="first" onChange={this.handleFirst} placeholder="First" />
        <div>{this.state.last}</div>
        Last: <input name="last" onChange={this.handleLast} placeholder="Last" />
        <br></br>
        <br></br> 
        <List />
      </span>
    );
  }
};

export default App;
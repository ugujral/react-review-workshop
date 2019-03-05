import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    };
    this.handleFirst = this.handleFirst.bind(this);
  }
  handleFirst(e) {
    console.log(this);
    console.log(e.target.value);
    this.setState({
      first: e.target.value
    });
  }
  render() {
    return (
      <div>
        {this.state.first} {this.state.last} <br />
        First: <input name="first" onChange={this.handleFirst} />
      </div>
    );
  }
}

export default App;

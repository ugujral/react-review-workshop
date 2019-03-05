import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.first} {this.props.last}
      </div>
    );
  }
}

export default App;

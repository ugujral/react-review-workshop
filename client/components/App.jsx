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
    // var whatToRender;
    // if (
    //   this.state.first === this.props.first &&
    //   this.state.last === this.props.last
    // ) {
    //   whatToRender = <List />;
    // } else {
    //   whatToRender = (
    //     <div>
    //       {this.state.first} {this.state.last} <br />
    //       First: <input name="first" onChange={this.handleFirst} />
    //       <br />
    //       Last: <input name="last" onChange={this.handleLast} />
    //       <br />
    //       <br />
    //     </div>
    //   );
    // }
    return (
      <div>
        {this.state.first === this.props.first &&
        this.state.last === this.props.last ? (
          <List />
        ) : (
          <div>
            {this.state.first} {this.state.last} <br />
            First: <input name="first" onChange={this.handleFirst} />
            <br />
            Last: <input name="last" onChange={this.handleLast} />
            <br />
            <br />
          </div>
        )}
        {/* <div>{whatToRender}</div> */}
      </div>
    );
  }
}

export default App;

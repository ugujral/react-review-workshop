import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: ['item1', 'item2', 'item3']
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit(e) {
    console.log(this.state.text);
    e.preventDefault();
    this.setState({
      text: '',
      items: this.state.items.concat(this.state.text)
    });
    document.getElementById('listForm').reset();
  }
  render() {
    return (
      <span>
        <div />
        <form id="listForm" onSubmit={this.handleSubmit}>
          Add to list: <input name="textField" onChange={this.handleInput} />
          <input value="submit" type="submit" />
        </form>
        <div>This text will be added: {this.state.text}</div>
        {/* <div>The array: {this.state.items}</div> */}
        <div>
          {this.state.items.map((item, index) => {
            return <ListEntry item={item} key={index} />;
          })}
        </div>
      </span>
    );
  }
}

export default List;

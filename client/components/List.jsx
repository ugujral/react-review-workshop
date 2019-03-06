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
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  handleClick(index) {
    var oldArrayFromState = [...this.state.items]; //es6 way of slice
    console.log('I was clicked');
    var updated = prompt('update:', oldArrayFromState[index]);
    oldArrayFromState[index] = updated;
    this.setState({
      items: oldArrayFromState
    });
  }
  handleDelete(index) {
    var copyOfItems = [...this.state.items];
    copyOfItems.splice(index, 1);
    this.setState({
      items: copyOfItems
    });
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
          <div>Items:</div>
          {this.state.items.map((item, index) => {
            return (
              <ListEntry
                item={item}
                key={index}
                index={index}
                handleClick={this.handleClick}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </span>
    );
  }
}

export default List;

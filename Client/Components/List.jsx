import React from 'react';
import ListEntry from './ListEntry.jsx';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: ['item1', 'item2', 'item3']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(e) {
    alert('Ouch');
  }
  handleText(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.text)
    });
    document.getElementById('myForm').reset();
  }
  render() {
    return (
      <span>
        <form id='myForm' onSubmit={this.handleSubmit}>
          Add To Array: <input name="text" onChange={this.handleText} />
          <input name="submit" type="submit" />
        </form>
        <div>
          {this.state.items.map((text,index) => {
            return <ListEntry key={index} item={text} handleClick={this.handleClick} />
          })}
        </div>
      </span>
    );
  }
};

export default List;
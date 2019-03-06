import React from 'react';

const ListEntry = props => {
  return (
    <span>
      <div>{props.item}</div>
      <button onClick={() => props.handleClick(props.index)}>Update</button>
      <button onClick={() => props.handleDelete(props.index)}>Delete</button>
    </span>
  );
};

export default ListEntry;

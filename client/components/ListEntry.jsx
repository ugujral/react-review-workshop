import React from 'react';

const ListEntry = props => {
  return (
    <span>
      <div onClick={props.handleClick}>{props.item}</div>
    </span>
  );
};

export default ListEntry;

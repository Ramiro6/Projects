import React from 'react';

export const TodoItem = (props) => {
  return(
    <li>
      <input type="checkbox" defaultchecked={props.isComplete}/>{props.name}
    </li>
  )
}

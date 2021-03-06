import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  return (
    <div className="Todo-list">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>

    </div>
  )
}

TodoList.propTypes = {
  todo: React.PropTypes.array.isRequired
}

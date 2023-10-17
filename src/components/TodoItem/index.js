import React from 'react'
import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem, createTodoItem, updateTodoItem} = props
  const {id, title, completed} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }
  const changeHandler = () => {
    createTodoItem()
  }

  return (
    <li>
      <p>{title}</p>

      <div>
        <button onClick={handleClick}>Delete</button>
      </div>
    </li>
  )
}
export default TodoItem

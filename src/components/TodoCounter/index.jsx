import React from 'react'
import './index.css'
import { TodoContext } from '../../TodoContext'

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <h1 className="Todo-counter">
      <p>
        Has completado
      </p>

      <p>
        <span className="todo-counter__span">
          { completedTodos }
        </span>

        de

        <span className="todo-counter__span">
          { totalTodos }
        </span>

        TODOS
      </p>
    </h1>
  )
}

export { TodoCounter }

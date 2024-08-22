import { TodoIcon } from '../IconComponents/TodoIcon'
import './index.css'

function TodoItem ({ text, completed, onCompleted, onDelete}) {
  return (
    <li>
      <button
        className="todo-item__button"
        onClick={ onCompleted }>
        <TodoIcon
          type="check"
          color={ completed ? '#01be01' : '#7d7c7d' } />
      </button>

      <p className={`${completed && 'todo-item--completed'}`}>
        { text }
      </p>

      <button
        className="todo-item__button todo-item__button--close"
        onClick={ onDelete }>
        <TodoIcon
          type="delete"
          color="#7d7c7d"/>
      </button>
    </li>
  )
}

export { TodoItem }

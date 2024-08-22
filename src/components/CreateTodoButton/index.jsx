import React from 'react'
import { ReactComponent as IconPlus } from '../../assets/icons/plus-icon.svg'
import { TodoContext } from '../../TodoContext'

import './index.css'

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext)
  return (
    <button
      className="create-todo-button"
      onClick={ () => setOpenModal(state => !state) }>
      <IconPlus className="create-todo-button__icon" />
    </button>
  )
}

export { CreateTodoButton }

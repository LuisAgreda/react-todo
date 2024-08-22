import React from 'react'
import './index.css'

import { TodoContext } from '../../TodoContext'

function AddTodo() {
  const { createTodo, closeModal, showWarning } = React.useContext(TodoContext)

  return (
    <div className="add-todo">
      <h2 className="add-todo__title">Escribe tu nuevo TODO</h2>

      <form>
        <textarea
          id="textField"
          className="add-todo__textarea"
          placeholder="Escribe un TODO"
          rows="3" />

        {
          showWarning &&
          <p className="add-todo__warning">
            Debes escribir un TODO
          </p>
        }

        <div className="add-todo__buttons-container">
          <button
            type="button"
            className="add-todo__button-cancel"
            onClick={ () => closeModal() }>
              Cancelar
            </button>

          <button
            type="button"
            className="add-todo__button-add"
            onClick={ () => createTodo() }>
              Añadir
            </button>
        </div>
      </form>
    </div>
  )
}

export { AddTodo }

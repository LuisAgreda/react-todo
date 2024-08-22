import React from 'react'

import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoLoading } from '../components/TodoLoading'
import { TodoError } from '../components/TodoError'
import { EmptyTodo } from '../components/EmptyTodo'
import { Modal } from '../components/Modal'

import { TodoContext } from '../TodoContext'
import { AddTodo } from '../components/AddTodo'

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        { loading && <TodoLoading numLoaders={ 4 } /> }

        { error && <TodoError /> }

        { (!loading && !searchedTodos.length) && <EmptyTodo /> }

        {
          searchedTodos.map(({ text, completed }) => (
            <TodoItem
              key={ text }
              text={ text }
              completed={ completed }
              onCompleted={ () => completeTodo(text) }
              onDelete={ () => deleteTodo(text) } />
          ))
        }
      </TodoList>

      <CreateTodoButton />

      { openModal && (
          <Modal>
            <AddTodo />
          </Modal>
        )
      }
    </React.Fragment>
  )
}

export { AppUI }

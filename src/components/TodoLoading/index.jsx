import React from 'react'
import './index.css'

function TodoLoading({ numLoaders }) {
  return (
    <React.Fragment>
      {
        Array(numLoaders).fill().map((_, index) => (
          <div
            key={ index }
            className="skeleton" />
        ))
      }
    </React.Fragment>
  )
}

export { TodoLoading }

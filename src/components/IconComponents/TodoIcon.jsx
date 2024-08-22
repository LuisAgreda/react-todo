import React from 'react'
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as IconClose } from '../../assets/icons/close.svg'

function TodoIcon({ type, color }) {
  const icons = {
    check: (color) => <IconCheck className={ `icon-svg icon-svg--${ type }` } fill={ color } />,
    delete: (color) => <IconClose className={ `icon-svg icon-svg--${ type }` } fill={ color } />
  }

  return (
    <React.Fragment>
      { icons[type](color) }
    </React.Fragment>
  )
}

export { TodoIcon }

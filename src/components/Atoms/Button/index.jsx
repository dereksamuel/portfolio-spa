/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, isSmall, onClick, theme, className, isActive, withoutShadow, ...anotherprops }) {
  const themes = {
    primary: '#7edbe9',
    secondary: 'darkgray',
    light: 'white',
    warning: '#e3a64f',
    danger: '#e34f4f',
  }
  const color = themes[theme]
  const buttonSize = isSmall ? 'text-sm md:text-base font-medium p-3 px-4' : 'text-base md:text-lg font-medium p-3 px-5'

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`${'button-container' + (isActive ? '--active' : '')}`} onClick={onClick} data-testid="button">
      {!withoutShadow ? (
        <button className={`${`button${isSmall ? '--small' : ''}`} ${buttonSize} ${className}`} {...anotherprops} style={{ '--bezel-color': color }}>
          <span>{children || 'No hay contenido en el botón'}</span>
        </button>
      ) : null}
      <div className={`${'button--border'} ${buttonSize}`} style={{ '--bezel-color': color }}>
        {children}
      </div>
    </div>
  )
}

Button.defaultProps = {
  onClick: () => {},
  theme: 'primary',
  isActive: false,
  className: '',
  isSmall: false,
  withoutShadow: false,
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  isActive: PropTypes.bool,
  anotherprops: PropTypes.object,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  withoutShadow: PropTypes.bool,
}

export default Button

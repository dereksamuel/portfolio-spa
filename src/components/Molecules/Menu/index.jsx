import React from 'react'
import Button from '../../Atoms/Button'
import styles from './_.module.scss'
import { useLocation, useNavigate } from 'react-router'

function Menu() {
  const router = useNavigate()
  const location = useLocation()

  const onGoTo = (path) => {
    router(path)
  }

  return (
    <div className={`${styles.menu} pt-5 pb-3 pr-5`} data-testid="menu">
      <Button onClick={() => onGoTo('/')} theme="primary" isActive={location.pathname === '/'}>
        About me
      </Button>
      <Button onClick={() => onGoTo('/projects')} theme="primary" isActive={location.pathname === '/projects'}>
        Projects
      </Button>
    </div>
  )
}

export default Menu

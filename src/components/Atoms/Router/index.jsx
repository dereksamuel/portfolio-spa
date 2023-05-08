import React from "react"
import { Route, Routes, useLocation } from "react-router"

import Home from "../../Pages/Home"
import Projects from "../../Pages/Projects"

import Menu from '../../Molecules/Menu'
import Cursor from '../Cursor'
import { CSSTransition, SwitchTransition } from "react-transition-group"

function Router () {
  const router = useLocation()

  return (
    <>
      <Routes>
        {/* <SwitchTransition> */}
          {/* <CSSTransition key={router.pathname} in={!!router.pathname} timeout={200} classNames="my-node" unmountOnExit> */}
            <Route path="/" element={Home} />
            <Route path="/projects" element={Projects} />
          {/* </CSSTransition>
        </SwitchTransition> */}
      </Routes>
    </>
  )
}

export default Router

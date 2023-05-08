import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import GeneralBorder from './components/Molecules/GeneralBorder'
import useLoadHoudini from './hooks/useLoadHoudini'

import { StoreContext } from './context/store'
import aboutMe from './context/modules/about_me.json'
import projects from './context/modules/projects.json'

import './styles/globals.scss'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'
import Cursor from './components/Atoms/Cursor'
import Projects from './components/Pages/Projects'

function App() {
  const [value, setValue] = useState({
    mode3dLoading: false,
    modelLoading: false,
    about_me: aboutMe,
    projects,
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  useLoadHoudini()

  return (
    <StoreContext.Provider value={{ value, setValue }}>
      <GeneralBorder>
        <Cursor />
        <RouterProvider router={router} />
      </GeneralBorder>
    </StoreContext.Provider>
  )
}

export default App

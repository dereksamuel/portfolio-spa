import React, { useRef } from 'react'
import { IoMdAdd } from 'react-icons/io'
import useMouse from '../../../hooks/useMouse'

function Cursor() {
  const $cursor = useRef(null)
  useMouse($cursor)

  return (
    <div ref={$cursor} className="cursor flex items-center justify-center" data-testid="cursor">
      <div className="cursor__main">
        <IoMdAdd className="text-7xl font-extralight cursor__gunn" />
      </div>
      <div className="cursor__main--border"></div>
    </div>
  )
}

export default Cursor

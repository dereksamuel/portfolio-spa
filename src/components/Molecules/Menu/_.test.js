/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import Menu from '.'
import { render } from '@testing-library/react'

describe('Menu', () => {
  it('should be rendered', () => {
    const menu = render(<Menu />)
    expect(menu.getByTestId('menu')).toBeInTheDocument()
  })

  it('should render child error', () => {
    const menu = render(<Menu />)
    expect(menu.getAllByTestId('button').length).toEqual(2)
  })
})

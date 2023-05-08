/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import Cursor from '.'
import { render } from '@testing-library/react'

describe('Cursor', () => {
  it('should be rendered', () => {
    const cursor = render(<Cursor />)
    expect(cursor.getByTestId('cursor')).toBeInTheDocument()
  })
})

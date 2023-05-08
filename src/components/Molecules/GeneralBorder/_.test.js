/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import GeneralBorder from '.'
import { render } from '@testing-library/react'

describe('GeneralBorder', () => {
  it('should be rendered', () => {
    const generalBorder = render(<GeneralBorder>a</GeneralBorder>)
    expect(generalBorder.getByTestId('general-border')).toBeInTheDocument()
  })
})

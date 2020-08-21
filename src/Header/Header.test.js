import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header Component', () => {

  it('should render the user\'s name when logged in', () => {

    render(
      <Header 
        name='Georgina'
        loginStatus={true}
      />
    ) 
  
    const name = screen.getByText(/georgina/i)

    expect(name).toBeInTheDocument()
    
  })
  
})
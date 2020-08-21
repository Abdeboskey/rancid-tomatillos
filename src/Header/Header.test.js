import React from 'react'
import Header from './Header'
import { render, screen, fireEvent } from '@testing-library/react'
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
  
  it('should allow a user to log in', () => { 
    const mockShowLoginPage = jest.fn()
    render(
      <Header 
        name='Georgina'
        loginStatus={false}
        showLoginPage={mockShowLoginPage}
      />
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockShowLoginPage).toBeCalledTimes(1)
  })
  
  it('should allow a user to log out', () => {
    const mockLogOut = jest.fn()
    render(
      <Header 
        name='Georgina'
        loginStatus={true}
        logOut={mockLogOut}
      />
    )
      
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockLogOut).toBeCalledTimes(1)
  })

})
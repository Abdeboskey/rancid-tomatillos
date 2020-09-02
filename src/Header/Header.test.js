import React from 'react'
import Header from './Header'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Header Component', () =>  {

  it('should render the user\'s name when logged in', () => {
    render(
      <MemoryRouter>
        <Header 
          name='Georgina'
          loginStatus={true}
        />
      </MemoryRouter>
    ) 
    
    const name = screen.getByText(/georgina/i)
    
    expect(name).toBeInTheDocument()
  })
  
  it('should allow a user to navigate to the log in page when not logged in', () => { 
    render(
      <MemoryRouter>
        <Header 
          name='Georgina'
          loginStatus={false}
        />
      </MemoryRouter>
    )
    
    const loginLink = screen.getByRole('link', {
      name: 'Movie-Production Clapboard Log In',
    });

    expect(loginLink).toBeInTheDocument()
  })
  
  it('should allow a user to log out', () => {
    const mockLogOut = jest.fn()
    render(
      <MemoryRouter>
        <Header 
          name='Georgina'
          loginStatus={true}
          logOut={mockLogOut}
        />
      </MemoryRouter>
    )
      
    const button = screen.getByRole('img', { name: 'Movie-Production Clapboard' })
    // const username = screen.getByRole('heading', { name: 'Hello, Georgina' })
    fireEvent.click(button)

    expect(mockLogOut).toBeCalledTimes(1)
  })

})
import React from 'react'
import Login from './Login'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { submitLoginCredentials } from '../apiCalls'
jest.mock('../apiCalls.js')

describe('Login Component', () => {

  it('should fire handleSubmit when a user tries to log in', () => {
    
  })

  it('should notify the user if login credentials are INVALID', async () => {
		submitLoginCredentials.mockResolvedValueOnce(
			{ "error": "Username or password is incorrect" }
		)

    const { getByRole, findByText } = render(<Login />)
		
    const button = getByRole('button')
		fireEvent.click(button)
    const errorMessage = await findByText(
			/invalid login information, please try again./i
		)

    expect(errorMessage).toBeInTheDocument()
  })

  it('should clear the input fields upon clicking submit', () => {

  })

  it('should not need the username to be case sensitive', () => {

  })

  it('should need the password to be case sensitive', () => {

  })

  it('should log a user in if the login credentials are correct', () => {

  })

  it('should fire the correct methods when the \'ACTION!\' button is clicked', () => {

  })

  it('should pass \'name\' as an argument when firing hideLoginPage', () => {
    
  })

})
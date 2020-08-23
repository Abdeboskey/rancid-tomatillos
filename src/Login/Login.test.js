import React from 'react'
import Login from './Login'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { submitLoginCredentials } from '../apiCalls'
jest.mock('../apiCalls.js')

import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('Login Component', () => {

	it('should log a user in if the login credentials are correct', async () => {
		submitLoginCredentials.mockResolvedValueOnce(
			{
				"user": {
					"id": 36,
					"name": "Twillie",
					"email": "twillie@manillie.vanillie"
				}
			}
		)

		const hideLoginPage = jest.fn()
		const { getByRole } = render(
			<Login
				hideLoginPage={hideLoginPage}
			/>
		)

		const button = getByRole('button')
		fireEvent.click(button)
		
		await waitFor(() => expect(hideLoginPage).toBeCalledTimes(1))
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

  it('should fire the correct methods when the \'ACTION!\' button is clicked', () => {

  })

  it('should pass \'name\' as an argument when firing hideLoginPage', () => {
    
  })

})
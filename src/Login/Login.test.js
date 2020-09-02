import React from 'react'
import Login from './Login'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import { submitLoginCredentials } from '../apiCalls'
jest.mock('../apiCalls.js')

import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('Login Component', () => {

	it('should log a user in if the login credentials are valid', async () => {
		submitLoginCredentials.mockResolvedValueOnce(
			{
				"user": {
					"id": 36,
					"name": "Twillie",
					"email": "twillie@manillie.vanillie"
				}
			}
		)

		const logIn = jest.fn()
		const { getByRole } = render(
			<MemoryRouter>
				<Login
					logIn={logIn}
				/>
			</MemoryRouter>
		)

		const button = getByRole('button')
		fireEvent.click(button)
		
		await waitFor(() => {
			expect(logIn).toBeCalledTimes(1)
			expect(logIn).toBeCalledWith({
        user: { email: "twillie@manillie.vanillie", id: 36, name: "Twillie" },
      });
		})
	})

	it('should notify the user if login credentials are invalid', async () => {
		submitLoginCredentials.mockRejectedValueOnce({ 
			error: "Username or password is incorrect" 
		})

		const { getByRole, findByText } = render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
		)

		const button = getByRole('button')
		fireEvent.click(button)
		const errorMessage = await findByText(/invalid login information/i);

		expect(errorMessage).toBeInTheDocument()
	})

	it('should clear the input fields upon clicking submit', () => {
		submitLoginCredentials.mockResolvedValueOnce(
			{
				"user": {
					"id": 36,
					"name": "Twillie",
					"email": "twillie@manillie.vanillie"
				}
			}
		)
		const { getByLabelText } = render(<Login />)

		const usernameInput = getByLabelText(/username/i)
		const passwordInput = getByLabelText(/password/i)

		expect(usernameInput.value).toEqual('')
		expect(passwordInput.value).toEqual('')
	})

})
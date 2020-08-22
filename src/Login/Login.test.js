import React from 'react'
import Login from './Login'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Login Component', () => {

  it('should fire handlesubmit when a user tries to log in', () => {
    
  })

  // it('should notify the user if login credentials are INVALID', () => {
  //   // setup
  //   // render the login component
  //   render(<Login />)

  //   // execution
  //   // find the inputs and the button
  //   // fire an event by clicking the button with incorrect credentials

  //   const usernameInput = screen.getByRole('textbox', { id: /username/i })
  //   const passwordInput = screen.getByRole('textbox', { id: /password/i })
  //   const button = screen.getByRole('button')
  //   fireEvent.change(usernameInput, { target: { value: 'tinzel@turing.io' } })
  //   fireEvent.change(passwordInput, { target: { value: 'zcvb' } })
  //   fireEvent.click(button)
  //   const errorMessage = screen.getByText(
  //     /invalid login information, please try again./i
  //   );
    
  //   // assertion 
  //   // make sure that the error renders on the page

  //   expect(errorMessage).toBeInTheDocument()

  // })

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
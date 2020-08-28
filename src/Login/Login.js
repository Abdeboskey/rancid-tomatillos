import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../scss/_Login.scss'
import clapboard from '../assets/clapboard.png'
import tomatillo from '../assets/tomatillo.png'
import { submitLoginCredentials } from '../apiCalls'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			error: '',
			loginOk: false
		}
	}

	handleInput(event) {
		const inputName = event.target.id
		const inputValue = event.target.value
		this.setState({ [inputName]: inputValue })
	}

	confirmLogin() {
		this.setState({
      username: '',
			password: '',
			loginOk: true
    })
	}

	showErrorMessage() {
    this.setState({
			error: 'Invalid login information',
			username: '',
			password: '',
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		submitLoginCredentials(this.state)
			.then((userInfo) => {
				this.confirmLogin()
				this.props.logIn(userInfo)
			})
			.catch((error) => this.showErrorMessage())
	}

	render() {
		if (this.state.loginOk) {
			return <Redirect to='/' /> 
		} 
		return (
      <form
        className='Login-form'
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <img className='tomatillo' src={tomatillo} alt='Green Tomatillo' />
        <img src={clapboard} alt='Classic Film-Production Clapboard' />
        <h2>Rancid Tomatillos</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            className='username-input'
            type='text'
            id='username'
            value={this.state.username}
            onChange={(event) => this.handleInput(event)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            className='password-input'
            type='password'
            id='password'
            value={this.state.password}
            onChange={(event) => this.handleInput(event)}
          />
        </div>
        <button type='submit'>ACTION!</button>
      </form>
    )
	}
}

export default Login
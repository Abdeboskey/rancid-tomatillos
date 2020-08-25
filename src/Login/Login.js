import React, { Component } from 'react'
import '../scss/_Login.scss'
import clapboard from '../assets/clapboard.png'
import tomatillo from '../assets/tomatillo.png'
import { submitLoginCredentials } from '../apiCalls'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			id: '',
			name: '',
			username: '',
			password: '',
			error: ''
		}
	}

	handleInput(event) {
		const inputName = event.target.id
		const inputValue = event.target.value
		this.setState({ [inputName]: inputValue })
	}

	setUserInfo(userInfo) {
		this.setState({
      id: userInfo.user.id,
      name: userInfo.user.name,
      username: '',
      password: '',
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
				this.setUserInfo(userInfo)
				this.props.hideLoginPage(this.state.name)
			})
			.catch((error) => this.showErrorMessage())
	}

	render() {
		return (
      <form
        className="Login-form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <img className='tomatillo' src={tomatillo} alt="Green Tomatillo" />
        <img src={clapboard} alt="Classic Film-Production Clapboard" />
        <h2>Rancid Tomatillos</h2>
					{this.state.error && <p>{this.state.error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="username-input"
            type="text"
            id="username"
            value={this.state.username}
            onChange={(event) => this.handleInput(event)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="password-input"
            type="password"
            id="password"
            value={this.state.password}
            onChange={(event) => this.handleInput(event)}
          />
        </div>
        <button type="Submit">ACTION!</button>
      </form>
    );
	}
}

export default Login
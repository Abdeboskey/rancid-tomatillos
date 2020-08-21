import React, { Component } from 'react'
import '../scss/_Login.scss'
import clapboard from '../assets/clapboard.png'

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
		const inputName = event.target.name
		const inputValue = event.target.value
		this.setState({ [inputName]: inputValue })
	}

	handleSubmit(event) {
		event.preventDefault()
		fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.username,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(userInfo => {
				this.setState({
				id: userInfo.user.id,
				name: userInfo.user.name,
				username: '',
				password: '',
			})
				this.props.hideLoginPage()
			})
			.catch(error => this.setState({
				error: 'Invalid login information, please try again.',
				username: '',
				password: ''
			}))
	}

	render() {
		return (
			<form
				className='Login-form'
				onSubmit={event => this.handleSubmit(event)}
			>
				<img src={clapboard} alt='Classic Film-Production Clapboard' />
				<h2>Rancid Tomatillos</h2>
				<div>
					<label htmlFor='username'>Username:</label>
					<input
						className='username-input'
						type='text'
						name='username'
						value={this.state.username}
						onChange={event => this.handleInput(event)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
						className='password-input'
						type='password'
						name='password'
						value={this.state.password}
						onChange={event => this.handleInput(event)}
					/>
				</div>
				<button type='Submit'>ACTION!</button>
				{this.state.error && <p>{this.state.error}</p>}
			</form>
		);
	}
}

export default Login
import React, { Component } from 'react'
import '../scss/_Login.scss'
import clapboard from '../assets/clapboard.png'
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

	handleSubmit(event) {
		event.preventDefault()
		submitLoginCredentials(this.state)
			.then((userInfo) => {
				this.setState({
					// Turn this into the guts of a method called updateUserInfo()
					id: userInfo.user.id,
					name: userInfo.user.name,
					username: "",
					password: "",
				});
				this.props.hideLoginPage(this.state.name);
			})
			.catch((error) =>
				this.setState({
					// this should be a method called show
					error: "Invalid login information, please try again.",
					username: "",
					password: "",
				})
			);
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
						id='username'
						value={this.state.username}
						onChange={event => this.handleInput(event)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
						className='password-input'
						type='password'
						id='password'
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
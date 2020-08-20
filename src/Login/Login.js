import React, { Component } from 'react'
import './Login.css'
import clapboard from '../assets/clapboard.png'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput(event) {
    const inputName = event.target.name
    const inputValue = event.target.value
    this.setState({ [inputName]: inputValue })
  }

  render() {
    return (
      <form className="Login-form">
        <img src={clapboard} alt="Classic Film-Production Clapboard" />
        <h2>Rancid Tomatillos</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="username-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={event => this.handleInput(event)}
            />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="password-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={event => this.handleInput(event)}
          />
        </div>
        <button>ACTION!</button>
      </form>
    );
  }
}

export default Login
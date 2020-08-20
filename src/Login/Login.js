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

  render() {
    return (
      <form className="Login-form">
        <img src={clapboard} alt="Classic Film-Production Clapboard" />
        <h2>Rancid Tomatillos</h2>
        <div>
          <label for="username">Username:</label>
          <input
            className="username-input"
            type="text"
            name="username"
            value={this.state.username}
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            className="password-input"
            type="text"
            name="password"
            value={this.state.password}
          />
        </div>
        <button>ACTION!</button>
      </form>
    );
  }
}

export default Login
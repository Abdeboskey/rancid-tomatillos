import React, { Component } from 'react'
import '../assets/clapboard.png'

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
      <>
        <img src='../assets/clapboard.png' alt='Classic Film-Production Clapboard' />
        <form>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.username}
            />
          <input
            type='text'
            name='password'
            placeholder='Password'
            value={this.state.password}
          />
          <button>Sign In!</button>
        </form>
      </>
    )
  }
}

export default Login
import React from 'react'
import PropTypes from 'prop-types'
import clapboard from '../assets/clapboard.png'
import tomatillo from '../assets/tomatillo.png'
import '../scss/_Header.scss'

const Header = ({ loginStatus, showLoginPage, logOut, name }) => {
  return (
    <header>
      <div className="title">
        <img
          className="logo"
          src={tomatillo}
          alt="Website Icon"
        />
        <h1>Rancid Tomatillos</h1>
      </div>
      {loginStatus && (
        <div className="logged-in">
          <h2 className="username">Hello, {name}</h2>
          <div className="logout-button">
            <img
              src={clapboard}
              onClick={logOut}
              alt="Movie-Production Clapboard"
            />
            <p onClick={logOut}>Log Out</p>
          </div>
        </div>
      )}
      {!loginStatus && (
        <div className='logged-out'>
          <div className="login-button">
            <img
              src={clapboard}
              onClick={showLoginPage}
              alt="Movie-Production Clapboard"
            />
            <p onClick={showLoginPage}>Log In</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header

Header.propTypes = {
	loginStatus: PropTypes.bool.isRequired,
	showLoginPage: PropTypes.func.isRequired,
	logOut: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
}
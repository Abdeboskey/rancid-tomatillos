import React from 'react'
import PropTypes from 'prop-types'
import clapboard from '../assets/clapboard.png'
import '../scss/_Header.scss'

const Header = ({ loginStatus, showLoginPage, logOut, name }) => {
  return (
    <header>
      <img
        className="logo"
        src="https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif"
        alt="Website Icon"
      />
      <h1>Rancid Tomatillos</h1>
      {loginStatus && (
        <>
          <p>Hello, {name}</p>
          <div className="button">
            <img
              src={clapboard}
              onClick={logOut}
              alt="Movie-Production Clapboard"
            />
            <p onClick={logOut}>Log Out</p>
          </div>
        </>
      )}
      {!loginStatus && (
        <div className="button">
          <img
            className="button"
            src={clapboard}
            onClick={showLoginPage}
            alt="Movie-Production Clapboard"
          />
          <p onClick={showLoginPage}>Log In</p>
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
import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Header.scss'

const Header = ({ loginStatus, showLoginPage, logOut, name }) => {
  return (
    <header>
			<img src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif'alt='Website Icon'/>
      <h1>Rancid Tomatillos</h1>
      {
        loginStatus && 
        <>
          <p>Hello, {name}</p>
          <button onClick={logOut}>Log Out</button>
        </>  
      }
      {!loginStatus && <button onClick={showLoginPage}>Log In</button>}
    </header>
  )
}

export default Header

Header.propTypes = {
	loginStatus: PropTypes.bool.isRequired,
	showLoginPage: PropTypes.func.isRequired,
	logOut: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
}
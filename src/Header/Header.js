import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import clapboard from '../assets/clapboard.png'
import tomatillo from '../assets/tomatillo.png'
import '../scss/_Header.scss'

const Header = ({ loginStatus, logOut, name }) => {
  return (
    <header>
      <div className='title'>
        <img className='logo' src={tomatillo} alt='Website Icon' />
        <Link to='/'><h1>Rancid Tomatillos</h1></Link>
      </div>
      {loginStatus && (
      <div className='logged-in'>
        <h2 className='username'>Hello, {name}</h2>
        <div className='logout-button'>
					<Link to='/'>
						<img
							src={clapboard}
							onClick={logOut}
							alt='Movie-Production Clapboard'
						/>
						<p onClick={logOut}>Log Out</p>
					</Link>
        </div>
      </div>
      )}
      {!loginStatus && (
      <div className='logged-out'>
        <div className='login-button'>
          <Link to='/login'>
            <img src={clapboard} alt='Movie-Production Clapboard' />
            <p>Log In</p>
          </Link>
        </div>
      </div>
      )}
    </header>
  );
}

export default Header

Header.propTypes = {
	loginStatus: PropTypes.bool.isRequired,
	logOut: PropTypes.func,
	name: PropTypes.string.isRequired
}
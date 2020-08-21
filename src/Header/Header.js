import React from 'react'
import '../scss/_Header.scss'

const Header = ({ loginStatus, showLoginPage, name }) => {
  return (
    <header>
			<img src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif'alt='Website Icon'/>
      <h1>Rancid Tomatillos</h1>
      {
        loginStatus && 
        <>
          <p>Hello, {name}</p>
          <button>Log Out</button>
        </>  
      }
      {!loginStatus && <button onClick={showLoginPage}>Log In</button>}
    </header>
  )
}

export default Header
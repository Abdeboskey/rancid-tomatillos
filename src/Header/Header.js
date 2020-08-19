import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header>
			<img src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif'alt='Website Icon'/>
      <h1>Rancid Tomatillos</h1>
      {
        props.loginStatus && 
        <>
          <p>Hello, username!</p>
          <button>Log Out</button>
        </>  
      }
      {!props.loginStatus && <button>Log In</button>}
    </header>
  )
}

export default Header
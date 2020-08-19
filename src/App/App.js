import React, {Component} from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render = () => {
    return (
      <main>
        <Header />
				<Movies />
      </main>
    )
  }
}

export default App;

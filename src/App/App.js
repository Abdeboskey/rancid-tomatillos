import React, {Component} from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => {
        console.log(error)
        this.setState({error: 'Oops, something smells RANCID 🥴'})
      })
  }

  render() {
    return (
      <main>
        <Header loginStatus={this.state.isLoggedIn} />
          {this.state.error && <h2>{this.state.error}</h2>}
        <Movies movies={this.state.movies} />
        <Login />
      </main>
    )
  }
}

export default App;

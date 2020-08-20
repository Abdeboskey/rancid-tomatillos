import React, {Component} from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
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
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
				<Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;

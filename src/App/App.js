import React, {Component} from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import '../scss/_App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
			isLoggedIn: false,
			displayLoginPage: true
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => {
        console.log(error)
        this.setState({error: 'Ew, something smells RANCID 🥴'})
      })
	}
	
	showLoginPage = () => {
		this.setState({ displayLoginPage: true })
	}

  render() {
    return (
      <main className='App'>
				{!this.state.displayLoginPage &&
					<>
						<Header loginStatus={this.state.isLoggedIn} />
							{this.state.error && <h2>{this.state.error}</h2>}
						<Movies movies={this.state.movies} />
					</>
				}
        {this.state.displayLoginPage && <Login />}
      </main>
    )
  }
}

export default App;

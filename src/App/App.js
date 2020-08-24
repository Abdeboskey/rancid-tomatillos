import React, {Component} from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import MovieDetails from '../Movie-details/MovieDetails'
import { getMovies } from '../apiCalls'
import '../scss/_App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
			displayLoginPage: false,
			displayMovieDetails: false,
			currentMovieId: '',
			isLoggedIn: false,
			name: ''
    }
  }

  componentDidMount() {
		getMovies()
			.then(data => this.setState({ movies: data.movies }))
			.catch(error => {
				console.log(error)
				this.setState({error: 'Ew, something smells RANCID 🥴'})
			})
	}
	
	showMovieDetails = (movieId) => {
		this.setState({
      displayMovieDetails: true,
      currentMovieId: movieId,
    })
	}

	showLoginPage = () => {
		this.setState({ displayLoginPage: true })
	}

	hideLoginPage = (name) => {
		this.setState({
			displayLoginPage: false,
			isLoggedIn: true,
			name: name
		})
	}

	logOut = () => {
		this.setState({
			isLoggedIn: false,
			name: ''
		})
	}

  render() {
    return (
      <main className='App'>
				{!this.state.displayLoginPage && !this.state.displayMovieDetails &&
					<>
						<Header
							loginStatus={this.state.isLoggedIn}
							showLoginPage={this.showLoginPage}
							logOut={this.logOut}
							name={this.state.name}
						/>
						{this.state.error && <h2>{this.state.error}</h2>}
						{this.state.movies.length === 0 &&
							<h2>There are currently no movies to rate.</h2>}
						<Movies
							movies={this.state.movies}
							showMovieDetails={this.showMovieDetails}
						/>
					</>
				}
        {this.state.displayLoginPage &&
					<Login
					hideLoginPage={this.hideLoginPage}
					/>
				}
				{this.state.displayMovieDetails &&
					<>
						<Header
							loginStatus={this.state.isLoggedIn}
							showLoginPage={this.showLoginPage}
							logOut={this.logOut}
							name={this.state.name}
						/>
						<MovieDetails movieId={this.state.currentMovieId} />
					</>	
				}
      </main>
    )
  }
}

export default App;

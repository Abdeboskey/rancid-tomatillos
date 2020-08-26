import React, {Component} from 'react'
import { Route } from 'react-router-dom'
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
			isLoggedIn: false,
			name: '',
			id: ''
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

	logIn = (userInfo) => {
		this.setState({
			isLoggedIn: true,
			name: userInfo.user.name,
			id: userInfo.user.id
		})
	}

	logOut = () => {
		this.setState({
			isLoggedIn: false,
			name: ''
		})
	}

	formatAverageRating(rating) {
    return rating.toString().split('').includes('.') ? 
      rating.toFixed(2) : 
      rating
  }

  render() {
    return (
      <main className="App">
        <Header
          loginStatus={this.state.isLoggedIn}
          logOut={this.logOut}
          name={this.state.name}
        />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route exact path="/" render={() => (
						<Movies
							movies={this.state.movies}
							formatAverageRating={this.formatAverageRating}
						/>
					)}
        />
				<Route exact path="/login" render={() => (
						<Login logIn={this.logIn} />
					)} 
				/>
				<Route exact path="/movies/:movieId" render={({ match }) => (
						<MovieDetails 
							movieId={match.params.movieId} 
							formatAverageRating={this.formatAverageRating}
						/>
					)}
				/>
      </main>
    );
  }
}

export default App;

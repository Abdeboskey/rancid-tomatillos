import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import MovieDetails from '../Movie-details/MovieDetails'
import { getMovies, getUserRatings, postRating } from '../apiCalls'
import '../scss/_App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
			name: '',
			id: '',
			isLoggedIn: false,
			movies: [],
			userRatings: [],
      error: ''
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

	componentDidUpdate(prevProps, prevState) {
		if (this.state.isLoggedIn !== prevState.isLoggedIn) {
			getUserRatings(this.state.id)
				.then(userRatings => {
					this.setState({ userRatings: userRatings.ratings })
				})
				.catch(error => console.log(error))
		}
	}


	submitRating(userId, userRating, movieId) {
		postRating(userId, userRating, movieId)
			.then(rating => {
				this.setState({ userRatings: [...this.state.userRatings, rating.rating] })
			})
			.catch(error => console.log(error))
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
      parseInt(rating.toFixed(2)) : 
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
							userRatings={this.state.userRatings}
						/>
					)}
        />
				<Route exact path="/login" render={() => (
						<Login logIn={this.logIn} />
					)} 
				/>
				<Route exact path="/movies/:movieId" render={({ match }) => (
						<MovieDetails
							userId={this.state.id}
							isLoggedIn={this.state.isLoggedIn}
							movieId={+match.params.movieId} 
							formatAverageRating={this.formatAverageRating}
							userRatings={this.state.userRatings}
							submitRating={this.submitRating}
						/>
					)}
				/>
      </main>
    )
  }
}

export default App;

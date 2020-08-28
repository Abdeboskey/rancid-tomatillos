import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import MovieDetails from '../Movie-details/MovieDetails'
import { getMovies, getUserRatings, postRating, deleteRating } from '../apiCalls'
import '../scss/_App.scss'

class App extends Component {
  constructor() {
		super()
		this.submitRating = this.submitRating.bind(this)
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
				this.setState({error: 'Ew, something smells RANCID 🥴'})
			})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.isLoggedIn !== prevState.isLoggedIn ||
			this.state.userRatings !== prevState.userRatings) {
			getUserRatings(this.state.id)
				.then(userRatings => {
					this.setState({ userRatings: userRatings.ratings })
				})
				.catch(error => this.setState({
				error: `I'm sorry, we could not retrieve your ratings 😰 Error Status: ${error.status}`
			}))
		}
	}
  
	async submitRating(userId, userRating, movieId, event) {
		event.preventDefault()
		if (this.findRating(movieId)) {
			await deleteRating(userId, this.findRatingId(movieId))
				.catch(error => this.setState({ error: error }))
		}
		userRating = +userRating
		postRating(userId, userRating, movieId)
      .then((rating) => {
        this.setState({
          userRatings: [...this.state.userRatings, rating.rating],
        });
      })
      .catch((error) => this.setState({
				error: `I'm sorry, we could not post your rating 😔 Error Status: ${error.status}`
			}))
	}

	findRating = movieId => {
		return this.state.userRatings.find((rating) => {
      return rating.movie_id === movieId
    })
	}

	findRatingId = movieId => {
		const ratingMatch = this.state.userRatings.find(
			rating => rating.movie_id === movieId
		)
		return ratingMatch.id
	}

	logIn = userInfo => {
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
      +rating.toFixed(2) : 
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

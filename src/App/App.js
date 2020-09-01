import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import MovieDetails from '../Movie-details/MovieDetails'
import { getMovies, getUserRatings, postRating, deleteRating, postFavorite, getFavoriteMovieIds } from '../apiCalls'
import '../scss/_App.scss'
import whiteStar from '../assets/white-star.png'
import yellowStar from '../assets/yellow-star.png'

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
			error: '',
			success: false,
			favoriteMovieIds: []
    }
  }

  componentDidMount() {
		getMovies()
			.then(data => this.setState({ movies: data.movies }))
			.catch(error => this.setState({
				error: `I'm sorry, we could not retrieve any movies 🥴 Error Status: ${error.status}`
			}))
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.isLoggedIn !== prevState.isLoggedIn ||
			this.state.userRatings !== prevState.userRatings) {
				this.updateUserRatings()
		}
		if (this.state.isLoggedIn !== prevState.isLoggedIn) {
			this.updateFavoriteMovieIds()
		}
	}

	updateUserRatings = () => {
		getUserRatings(this.state.id)
			.then(userRatings => {
				this.setState({ userRatings: userRatings.ratings })
			})
			.catch(error => this.setState({
				error: `I'm sorry, we could not retrieve your ratings 😰 Error Status: ${error.status}`
			}))
	}

	updateFavoriteMovieIds = () => {
		getFavoriteMovieIds()
			.then(data => {
				this.setState({ favoriteMovieIds: [...data] })
			})
			.catch(error => this.setState({
				error: `I'm sorry, we could not retrieve your favorite movies 😬 Error Status: ${error.status}`
			}))
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
					success: true
				})
				setTimeout(() => {
					this.setState({ success: false })
				}, 3240)
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

	getFavoriteMovies = () => {
		return this.state.movies.filter(movie => {
			return this.state.favoriteMovieIds.find(movieId => movieId === movie.id)
		})
	}
	
	changeFavoriteStatus = (movieId, event) => {
		postFavorite(movieId)
			.then(data => {
				this.updateFavoriteMovieIds()
			})
			.catch((error) => this.setState({
				error: 'I\'m sorry, we could not (un)favorite this movie at this time 🤕'
			}))
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
				{this.state.isLoggedIn &&
				<Link
					to="/favorites" className='view-favorite-button'
				>View Favorite Movies</Link>}
        <Route exact path="/" render={() => (
						<Movies
							movies={this.state.movies}
							formatAverageRating={this.formatAverageRating}
							userRatings={this.state.userRatings}
							isLoggedIn={this.state.isLoggedIn}
							changeFavoriteStatus={this.changeFavoriteStatus}
							favoriteMovies={this.getFavoriteMovies()}
						/>
					)}
        />
				<Route exact path="/favorites" render={() => (
						<Movies
							movies={this.getFavoriteMovies()}
							formatAverageRating={this.formatAverageRating}
							userRatings={this.state.userRatings}
							isLoggedIn={this.state.isLoggedIn}
							changeFavoriteStatus={this.changeFavoriteStatus}
							favoriteMovies={this.getFavoriteMovies()}
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
							success={this.state.success}
							changeFavoriteStatus={this.changeFavoriteStatus}
							favoriteMovies={this.getFavoriteMovies()}
						/>
					)}
				/>
      </main>
    )
  }
}

export default App;

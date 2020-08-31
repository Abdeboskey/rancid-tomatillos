import React, { Component } from 'react'
import Billboard from '../Billboard/Billboard'
import Ratings from '../Ratings/Ratings'
import Details from '../Details/Details'
import Videos from '../Videos/Videos'
import { getMovieDetails } from '../apiCalls'
import '../scss/_MovieDetails.scss'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: this.props.movieId,
      title: '',
      poster: '',
      backdrop: '',
      releaseDate: '',
      overview: '',
			averageRating: 0,
			userRating: 0,
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: '',
      tagline: '',
			videos: [],
      error: ''
    }
  }

  componentDidMount() {
    getMovieDetails(this.state.movieId)
      .then(data => {
				this.setMovieInfo(data[0])
				this.setState({ videos: data[1].videos })
			})
      .catch(error => this.setState({
				error: `I'm sorry, we could not retrieve the details of this movie 🥺 Error Status: ${error.status}`
			}))
	}

  setMovieInfo({ movie }) {
    this.setState({
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      releaseDate: this.formatDate(movie.release_date),
      overview: movie.overview,
			averageRating: this.props.formatAverageRating(movie.average_rating),
			userRating: this.findUserRating(this.props),
      genres: this.formatGenres(movie.genres),
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: this.formatRuntime(movie.runtime),
      tagline: movie.tagline,
		})
	}

	findUserRating(props) {
		const userRating = props.userRatings.find(rating => 
			rating.movie_id === this.state.movieId
    )
    if (!userRating) {
      return -1
    }
		return userRating.rating
	}

	handleUserRatingInput = event => {
		const inputValue = event.target.value
		this.setState({ userRating: inputValue })
	}

  formatGenres(genres) {
    return genres.map(
      (genre, i) => !i ? ` ${genre} ` : `/ ${genre} `
    )
  }

  formatRuntime(totalMin) {
    const hours = (totalMin / 60).toFixed(0)
    const minutes = totalMin % 60
    return `${hours}hr ${minutes}min`;
  }

  formatDate(date) {
    date = date.split('-')
    date.push(date.shift())
    if (date[0].charAt(0) === '0') date[0] = date[0].slice(1)
    if (date[1].charAt(0) === '0') date[1] = date[1].slice(1)
    return date.join('/')
	}
	
  render() {
    return (
      <>
				{this.state.error && <h2>{this.state.error}</h2>}
        <Billboard
          backdrop={this.state.backdrop}
          tagline={this.state.tagline}
          />
        <section className='MovieDetails'>
          <Ratings
            isLoggedIn={this.props.isLoggedIn}
            userId={+this.props.userId}
            movieId={this.state.movieId}
            title={this.state.title}
            poster={this.state.poster}
            releaseDate={this.state.releaseDate}
            averageRating={this.state.averageRating}
            userRating={this.state.userRating}
            submitRating={this.props.submitRating}
            handleUserRatingInput={this.handleUserRatingInput}
            success={this.props.success}
            />
          <Details
            releaseDate={this.state.releaseDate}
            overview={this.state.overview}
            genres={this.state.genres}
            budget={this.state.budget}
            revenue={this.state.revenue}
            runtime={this.state.runtime}
            />
        </section>
        <Videos videos={this.state.videos} />
      </>
    )
  }
}

export default MovieDetails
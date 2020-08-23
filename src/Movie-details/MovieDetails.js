// This is our movie details component
// It is a Class-Component
// It should display all of the details about a movie, including:

////////// MovieDetails Component

// Billboard
// ---> Backdrop (presented as a kind of Billboard-style header?)
// ---> Tagline (if exists, overlaid on backdrop)

// Ratings
// ---> Poster
// ---> Title
// ---> Release Date
// ---> Avarage Rating
// ---> User Rating

// Details
// ---> Overview (Synopsis?)
// ---> Genre (single or list)
// ---> Budget
// ---> Revenue
// ---> Runtime

// MovieDetails components will also need to store a unique ID to add user's ratings (The ID is provided)

import React, { Component } from 'react'
import Ratings from '../Ratings/Ratings'
import Details from '../Details/Details'
import { getMovieDetails } from '../apiCalls'
import '../scss/_MovieDetails.scss'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: this.props.id,
      title: '',
    }
  }
  
  componentDidMount() {
    getMovieDetails(this.state.movieId)
      .then(data => setMovieInfo())
  }

  setMovieInfo() {
    this.setState({})
  }

  render() {
    return (
      <>
        <Billboard />
        <Ratings />
        <Details />
      </>
    )
  }
}
export default MovieDetails
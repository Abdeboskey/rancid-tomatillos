import React, { Component } from 'react'
// import Billboard from '../Billboard/Billboard'
// import Ratings from '../Ratings/Ratings'
// import Details from '../Details/Details'
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
      averageRating: '',
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: '',
      videos: [],
      error: '',
    }
  }
  
  componentDidMount() {
    getMovieDetails(this.state.movieId)
      .then(data => {
				console.log(data)
				this.setMovieInfo(data[0])
				this.setState({ videos: data[1].videos })
			})
      .catch(error => {
        console.log(error)
        this.setState({ error: error })
			})
  }

  setMovieInfo({ movie }) {
    this.setState({
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      releaseDate: movie.release_date,
      overview: movie.overview,
      averageRating: movie.average_rating,
      genres: movie.genres,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      tagline: movie.tagline,
    })
  }

  render() {
    return (
      <>
        <h2>Bonknanas</h2>
        {/* <Billboard /> */}
        {/* <Ratings /> */}
        {/* <Details /> */}
        <Videos videos={this.state.videos}/>
      </>
    )
  }
}
export default MovieDetails
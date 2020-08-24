import React, { Component } from 'react'
import Ratings from '../Ratings/Ratings'
import Details from '../Details/Details'
import Billboard from '../Billboard/Billboard'
import { getMovieDetails } from '../apiCalls'
import '../scss/_MovieDetails.scss'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: this.props.movieId,
      title: '',
      poster: '',
      backdrop: '',
      releaseDate: '',
      overview: '',
      averageRating: 0,
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: '',
      videos: [],
      error: '',
    };
  }

  componentDidMount() {
    getMovieDetails(this.state.movieId)
      .then((data) => this.setMovieInfo(data))
      .catch((error) => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  setMovieInfo({ movie }) {
    this.setState({
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      releaseDate: this.formatDate(movie.release_date),
      overview: movie.overview,
      averageRating: movie.average_rating,
      genres: movie.genres,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      tagline: movie.tagline,
    });
  }

  formatDate(date) {
    date = date.split('-');
    date.push(date.shift());
    if (date[0].charAt(0) === '0') date[0] = date[0].slice(1);
    if (date[1].charAt(0) === '0') date[1] = date[1].slice(1);
    return date.join('/');
  }

  render() {
    return (
      <>
        <h2>Bonknanas</h2>
        <Billboard
          backdrop={this.state.backdrop}
          tagline={this.state.tagline}
        />
        <Ratings
          title={this.state.title}
          poster={this.state.poster}
          releaseDate={this.state.releaseDate}
          averageRating={this.state.averageRating}
        />
        <Details
          releaseDate={this.state.releaseDate}
          overview={this.state.overview}
          genres={this.state.genres}
          budget={this.state.budget}
          revenue={this.state.revenue}
          runtime={this.state.runtime}
        />
      </>
    );
  }
}

export default MovieDetails
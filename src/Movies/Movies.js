import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import '../scss/_Movies.scss'

const Movies = ({ movies }) => {
	const moviesList = movies.map(movie => {
		return (
			<Card
				key={movie.id}
				movieId={movie.id}
				title={movie.title}
				poster={movie.poster_path}
				rating={movie.average_rating}
			/>
		)
	})

	return (
    <section className="Movies-container">
      {movies.length === 0 && (
        <h3>There are currently no movies to rate.</h3>
      )}
      {moviesList}
    </section>
  );
}

export default Movies

Movies.propTypes = {
	movies: PropTypes.array.isRequired
}
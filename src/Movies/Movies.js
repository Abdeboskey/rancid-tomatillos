import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import '../scss/_Movies.scss'

const Movies = ({ movies, formatAverageRating, userRatings, isLoggedIn, favoriteMovies, changeFavoriteStatus }) => {
	let isFavorite
	const moviesList = movies.map(movie => {
		const userRating = userRatings.find(rating => rating.movie_id === movie.id)
		if (favoriteMovies) {
			isFavorite = favoriteMovies.find(favoriteMovie => favoriteMovie.id === movie.id)
		}
		return (
			<Card
				key={movie.id}
				movieId={movie.id}
				title={movie.title}
				poster={movie.poster_path}
				rating={formatAverageRating(movie.average_rating)}
				userRating={userRating}
				isLoggedIn={isLoggedIn}
				isFavorite={isFavorite}
				changeFavoriteStatus={changeFavoriteStatus}
			/>
		)
	})

	return (
    <section className='Movies-container'>
      {movies.length === 0 && (
        <h3>There are currently no movies to view.</h3>
      )}
      {moviesList}
    </section>
  );
}

export default Movies

Movies.propTypes = {
	movies: PropTypes.array.isRequired,
	formatAverageRating: PropTypes.func.isRequired,
	userRatings: PropTypes.array.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	changeFavoriteStatus: PropTypes.func,
	favoriteMovieView: PropTypes.bool
}
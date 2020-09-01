import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../scss/_Card.scss'
import whiteStar from '../assets/white-star.png'
import yellowStar from '../assets/yellow-star.png'

const Card = ({ movieId, title, poster, rating, userRating, isLoggedIn, isFavorite, changeFavoriteStatus }) => {
	
	return (
    <article className="Card">
      <Link to={`/movies/${movieId}`}>
        <img
          className="Card-poster"
          src={poster}
          alt="Movie Poster"
        />
      </Link>
			<div>
				{isLoggedIn && !isFavorite &&
				<input
					type='image'
					alt='Star Icon'
					src={whiteStar}
					className='favorite'
					onClick={(event) => changeFavoriteStatus(movieId, event)}>
				</input>
				}
				{isLoggedIn && isFavorite &&
				<input
					type='image'
					alt='Star Icon'
					src={yellowStar}
					className='favorite'
					onClick={(event) => changeFavoriteStatus(movieId, event)}>
				</input>
				}
				<h3>{title}</h3>
			</div>
			<p><b>Average Rating:</b> {rating} / 10</p>
			{userRating && isLoggedIn && 
      <p><b>Your Rating:</b> {userRating.rating} / 10</p>}
    </article>
  )
}

export default Card

Card.propTypes = {
	movieId: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	userRating: PropTypes.object,
	isLoggedIn: PropTypes.bool.isRequired,
	changeFavoriteStatus: PropTypes.func,
	favoriteMovieView: PropTypes.bool
}
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../scss/_Card.scss'

const Card = ({ movieId, title, poster, rating, userRating }) => {
	return (
    <div className="Card">
      <Link to={`/movies/${movieId}`}>
        <img
          className="Card-poster"
          src={poster}
          alt="Movie Poster"
        />
      </Link>
      <h3>{title}</h3>
			<p><b>Average Rating:</b> {rating} / 10</p>
			{userRating && <p><b>Your Rating:</b> {userRating.rating} / 10</p>}
    </div>
  )
}

export default Card

Card.propTypes = {
	movieId: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
}
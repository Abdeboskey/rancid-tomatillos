import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Ratings.scss'

const Ratings = ({ title, poster, releaseDate, averageRating, userRating }) => {
  return (
    <section className='MovieDetails-Ratings'>
      <img src={poster} alt='Movie Poster' />
      <article>
        <h2>{title}</h2>
        <p>{releaseDate.slice(-4)}</p>
        <p>Average Rating: {averageRating} / 10</p>
				{userRating && <p>Your Rating: {userRating.rating} / 10</p>}
      </article>
			<form className='MovieDetails-NewRating'>
				<input id='rating' type='range' min='0' max='10'>
				</input>
				<label htmlFor='rating'>IM A LABEL</label>
				<button>Submit Rating</button>
			</form>
    </section>
  ) 
}

export default Ratings

Ratings.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Ratings.scss'

const Ratings = ({ userId, movieId, title, poster, releaseDate, averageRating, userRating, submitRating, handleUserRatingInput }) => {

  return (
    <section className='MovieDetails-Ratings'>
      <img src={poster} alt='Movie Poster' />
      <article>
        <h2>{title}</h2>
        <p>{releaseDate.slice(-4)}</p>
        <p>Average Rating: {averageRating} / 10</p>
				{typeof userRating === 'object' && 
					<p>Your Rating: {userRating.rating} / 10</p>}
				{typeof userRating === 'string' && 
					<p>Your Rating: {userRating} / 10</p>}
      </article>
				<form
					className='MovieDetails-NewRating'
					onSubmit={(event) => submitRating(userId, userRating, movieId, event)}
				>
					<input
						id='rating'
						type='range'
						min='0'
						max='10'
						value={userRating}
						onChange={(event) => handleUserRatingInput(event)}
					>
					</input>
					{typeof userRating === 'object' &&
						<label htmlFor='rating'>{userRating.rating} / 10 </label>
					}
					{typeof userRating === 'number' &&
						<label htmlFor='rating'>{userRating} / 10 </label>
					}
					<button type='submit'>Submit Rating</button>
				</form>
			{/* {userRating &&
				<button onClick={() => deleteRating}>Rate again!</button>
			} */}
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
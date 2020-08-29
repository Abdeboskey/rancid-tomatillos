import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Ratings.scss'

const Ratings = ( props ) => {

  return (
    <section className="MovieDetails-Ratings">
      <img src={props.poster} alt="Movie Poster" />
      <article>
        <h2>{props.title}</h2>
        <p>{props.releaseDate.slice(-4)}</p>
        <p>Average Rating: {props.averageRating} / 10</p>
        {props.userRating > 0 && props.isLoggedIn &&
        <p>Your Rating: {props.userRating} / 10</p>}
      </article>
      {props.isLoggedIn && 
      <form
        className="MovieDetails-NewRating"
        onSubmit={(event) =>
          props.submitRating(
            props.userId,
            props.userRating,
            props.movieId,
            event
          )
        }
      >
        <input
          id="rating"
          type="range"
          min="0"
          max="10"
          value={props.userRating}
          onChange={(event) => props.handleUserRatingInput(event)}
        ></input>
        <button type="submit">Submit Rating</button>
				{props.success &&
				<p>
					<span role='img' aria-label='sparkle emoji'>✨</span>
						Thanks for Rating!
					<span role='img' aria-label='clapboard emoji'>🎬</span>
				</p>
				}
      </form>
      }
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
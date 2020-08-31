import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Ratings.scss'
import star from '../assets/star.png'

const Ratings = ( props ) => {
  return (
    <section className='MovieDetails-Ratings'>
      <img src={props.poster} alt='Movie Poster' />
      <article>
        <h2>{props.title}</h2>
        <p className='release-date'>{props.releaseDate.slice(-4)}</p>
        <p className='rating'>
          <b>Average Rating:</b><br/> {props.averageRating} / 10
        </p>
        {props.userRating > 0 && props.isLoggedIn && (
          <p className='rating'>
            <b>Your Rating:</b><br/> {props.userRating} / 10
          </p>
        )}
      </article>
      {props.isLoggedIn && (
        <form
          className='MovieDetails-NewRating'
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
            id='rating'
            type='range'
            orient='vertical'
            min='1'
            max='10'
            value={props.userRating}
            onChange={(event) => props.handleUserRatingInput(event)}
          ></input>
          <button type='submit'>Submit Rating</button>
          {props.success && (
            <p>
              <span role='img' aria-label='sparkle emoji'>
                ✨
              </span>
              Thank You!
              <span role='img' aria-label='clapboard emoji'>
                🎬
              </span>
            </p>
          )}
        </form>
      )}
    </section>
  );
}

export default Ratings

Ratings.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  handleUserRatingInput: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  movieId: PropTypes.number.isRequired,
  submitRating: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  userRating: PropTypes.number
}
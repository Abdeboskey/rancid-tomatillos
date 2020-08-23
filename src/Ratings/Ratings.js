import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Ratings.scss'

const Ratings = ({ title, poster, releaseDate, averageRating, userRating }) => {
  return (
    <section className='MovieDetails-Ratings'>
      <img src={poster} alt='Movie Poster' />
      <article>
        <h2>{title}</h2>
        <p>{releaseDate.slice(0, 3)}</p>
        <p>Average Rating: {averageRating}</p>
        {/* <p>{userRating}</p> */}
      </article>
    </section>
  ) 
}

export default Ratings

Ratings.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  userRating: PropTypes.number.isRequired
}
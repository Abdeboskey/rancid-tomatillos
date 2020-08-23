import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Card.scss'

const Card = ({ title, poster, rating }) => {
	return (
		<div className='Card'>
			<img className='Card-poster' src={poster} alt='Movie Poster'/>
			<h3>{title}</h3>
			<p>{rating}/10</p>
		</div>
	)
}

export default Card

Card.propTypes = {
	title: PropTypes.string,
	poster: PropTypes.string,
	rating: PropTypes.number
}
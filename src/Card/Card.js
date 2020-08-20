import React from 'react'
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
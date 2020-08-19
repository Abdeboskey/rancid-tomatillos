import React from 'react'
import './Card.css'

const Card = (props) => {
	return (
		<div className='Card'>
			<img className='Card-poster' src={props.poster} />
			<h3>{props.title}</h3>
			<p>{props.averageRating}/10</p>
		</div>
	)
}

export default Card
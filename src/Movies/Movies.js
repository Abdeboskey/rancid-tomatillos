import React from 'react'
import Card from '../Card/Card'
import './_Movies.scss'

const Movies = ({ movies }) => {
	const moviesList = movies.map(movie => {
		return (
			<Card
				key={movie.id}
				title={movie.title}
				poster={movie.poster_path}
				rating={movie.average_rating}
			/>
		)
	})

	return (
		<section className='Movies-container'>
			{moviesList}
		</section>
	)
}

export default Movies
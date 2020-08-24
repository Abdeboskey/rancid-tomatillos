import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Details.scss'

const Details = ({ releaseDate, overview, genres, budget, revenue, runtime }) => {
	return (
		<section className='MovieDetails-Details'>
			<p>Synopsis: {overview}</p>
			<p>Runtime: {runtime}</p>
			<p>Genres: {genres}</p>
			<p>Release Date: {releaseDate}</p>
			<p>Budget: ${budget.toLocaleString()}.00</p>
			<p>Revenue: ${revenue.toLocaleString()}.00</p>
		</section>
	)
}

export default Details

Details.propTypes = {
	releaseDate: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	budget: PropTypes.number.isRequired,
	revenue: PropTypes.number.isRequired,
	runtime: PropTypes.string.isRequired
}
import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Details.scss'

const Details = ({ releaseDate, overview, genres, budget, revenue, runtime }) => {
	return (
		<section className='MovieDetails-Details'>
			<p><b>Synopsis:</b><br/> {overview}</p>
			<p><b>Runtime:</b><br/> {runtime}</p>
			<p><b>Genres:</b><br/> {genres}</p>
			<p><b>Release Date:</b><br/> {releaseDate}</p>
			<p><b>Budget:</b><br/> ${budget.toLocaleString()}.00</p>
			<p><b>Revenue:</b><br/> ${revenue.toLocaleString()}.00</p>
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
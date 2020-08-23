import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Details.scss'

const Details = ({ overview, genres, budget, revenue, runtime }) => {
	return (
		
	)
}

export default Details

Details.propTypes = {
	overview: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	budget: PropTypes.number.isRequired,
	revenue: PropTypes.number.isRequired,
	runtime: PropTypes.number.isRequired
}
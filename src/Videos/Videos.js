import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Videos.scss'

const Videos = ({ videos }) => {
	const videosList = videos.map(video => {
		return (
			<li>{video}</li>
		)
	})

	return (
		<section className='MovieDetails-Videos'>
			<ul>
				{videosList}
			</ul>
		</section>
	)
}

export default Videos

Videos.propTypes = {
	videos: PropTypes.array.isRequired,
}
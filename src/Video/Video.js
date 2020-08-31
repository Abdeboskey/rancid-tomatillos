import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Videos.scss'

const Video = ({ videoId, movieKey, type }) => {
	return (
		<article className='Video'>
			<h3>{type}</h3>
			<iframe
				title={videoId}
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${movieKey}`}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				>
			</iframe>
		</article>
	)
}

export default Video

Video.propTypes = {
	videoId: PropTypes.number.isRequired,
	movieKey: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
}
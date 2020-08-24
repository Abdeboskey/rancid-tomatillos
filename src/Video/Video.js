import React from 'react'
import PropTypes from 'prop-types'
import '../scss/_Videos.scss'

const Video = ({ videoId, key }) => {
	return (
		<iframe
			title={videoId}
			width='560'
			height='315'
			src={`https://www.youtube.com/embed/${key}`}
			frameborder='0'
			allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			allowfullscreen>
		</iframe>
	)
}

export default Video

Video.propTypes = {
	key: PropTypes.string.isRequired
}
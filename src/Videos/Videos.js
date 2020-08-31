import React from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video'
import '../scss/_Videos.scss'

const Videos = ({ videos }) => {
	const videosList = videos.map(video => {
		return (
			<li key={video.id}>
				<Video
					videoId={video.id}
					movieId={video.movie_id}
					movieKey={video.key}
					type={video.type}
				/>
			</li>
		)
	})

	return (
		<section className='MovieDetails-Videos'>
			<ul className='video-list'>
				{videosList}
			</ul>
		</section>
	)
}

export default Videos

Videos.propTypes = {
	videos: PropTypes.array.isRequired,
}
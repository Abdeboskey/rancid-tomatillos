import React from 'react'
import Videos from './Videos'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Videos Component', () => {
	it('should show the correct content when rendered', () => {
		const videos = [
			{
				'videoId': 1,
				'movieId': 123,
				'key': 'key1',
			},
			{
				'videoId': 2,
				'movieId': 321,
				'key': 'key2',
			}
		]

		render(<Videos videos={videos} />)

	})
})
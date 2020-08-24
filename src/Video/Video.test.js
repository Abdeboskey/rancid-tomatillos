import React from 'react'
import Video from './Video'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Video Component', () => {

	it('should show the correct content when rendered', () => {
		render(
			<Video
				videoId={3}
				movieKey='thisisareallylongkey'
				type='trailer'
			/>
		)

		const videoType = screen.getByRole('heading', { name: /trailer/i })

		expect(videoType).toBeInTheDocument()
	})
	
})
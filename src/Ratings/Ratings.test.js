import React from 'react'
import Ratings from './Ratings'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Ratings Component', () => {
	
	it('should show the correct content when rendered', () => {
		render(
			<Ratings
				title='Rancid Tomatillos'
				poster='www.posterpath.com/poster'
				releaseDate='2021'
				averageRating={8}
				userRating={4}
			/>
		)

		const title = screen.getByRole('heading', { name: /rancid tomatillos/i })
		const poster = screen.getByAltText(/movie poster/i)
		const releaseDate = screen.getByText(/2021/i)
		const averageRating = screen.getByText(/8/i)

		expect(title).toBeInTheDocument()
		expect(poster).toBeInTheDocument()
		expect(releaseDate).toBeInTheDocument()
		expect(averageRating).toBeInTheDocument()
	})

	it('should fire the correct method for user rating', () => {

	})

})
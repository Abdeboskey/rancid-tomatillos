import React from 'react'
import Card from './Card'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Card Component', () => {

	it('should show the correct content when rendered', () => {
		const mockShowMovieDetails = jest.fn()
		render(
			<Card
				movieId={4}
				title='Im a title'
				poster='www.posterpath.com/poster'
				rating={67}
				showMovieDetails={mockShowMovieDetails}
			/>
		)

		const poster = screen.getByAltText(/movie pOster/i)
		const title = screen.getByText(/im a title/i)
		const rating = screen.getByText(/67/)

		expect(poster).toBeInTheDocument()
		expect(title).toBeInTheDocument()
		expect(rating).toBeInTheDocument()
	})

	it('should show movie details when poster is clicked', () => {
		const mockShowMovieDetails = jest.fn()
		render(
			<Card
				movieId={35}
				title='The Adventures of Howard and Finn'
				poster='www.posterpath.com/poster'
				rating={1000}
				showMovieDetails={mockShowMovieDetails}
			/>
		)
		const poster = screen.getByAltText(/movie poster/i)
		fireEvent.click(poster)

		expect(mockShowMovieDetails).toBeCalledTimes(1)
		expect(mockShowMovieDetails).toBeCalledWith(35)
	})

})
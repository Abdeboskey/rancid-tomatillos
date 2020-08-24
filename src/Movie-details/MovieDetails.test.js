import React from 'react'
import MovieDetails from './MovieDetails'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getMovieDetails } from '../apiCalls'
jest.mock('../apiCalls.js')

import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('MovieDetails Component', () => {

	it('should display all movie details', async () => {
		getMovieDetails.mockResolvedValueOnce({
			movie: {
				"id": 1234,
				"title": "Die Hard Again",
				"poster_path": "www.posterpath.com/poster1",
				"backdrop_path": "www.posterpath.com/backdrop1",
				"release_date": "3001-01-01",
				"overview": "He doesn't die hard, again",
				"genres": [
					"Action",
					"Crime",
					"Drama",
					"Thriller"
				],
				"budget": 3685532,
				"revenue": 2047575,
				"runtime": 95,
				"tagline": "HERE COMES ANOTHA ONE",
				"average_rating": 10
			}
		})

		const { findByAltText, findByText } = render(<MovieDetails />)
		screen.debug()
		const backdrop = await findByAltText(/movie backdrop/i)
		const poster = await findByAltText(/movie poster/i)
		const synopsis = await findByText(/synopsis/i)
		

		expect(backdrop).toBeInTheDocument()
		expect(poster).toBeInTheDocument()
		expect(synopsis).toBeInTheDocument()
	})

})

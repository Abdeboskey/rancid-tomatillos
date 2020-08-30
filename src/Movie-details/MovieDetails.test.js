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

		const backdrop = await findByAltText(/movie backdrop/i)
		const poster = await findByAltText(/movie poster/i)
		const synopsis = await findByText(/synop\w+/i)
		

		expect(backdrop).toBeInTheDocument()
		expect(poster).toBeInTheDocument()
		expect(synopsis).toBeInTheDocument()
	})

	it('should notify user of a server error', async () => {
		getMovieDetails.mockRejectedValueOnce({ status: 666 })
		const { findByText } = render(<MovieDetails />)

		const errorMessage = await findByText(/error status: 666/i)

		expect(errorMessage).toBeInTheDocument()
	})

	it('should notify user if there are no movie details', async () => {
		// for this, we will need to add in a p tag "There are currently no details for this movie. Please try another one!" if the movie key is assigned to an empty object
		// add conditional rendering so that if movie details obj is empty, it shows p tag with message
		// to test:
		// set up
		// getMovieDetails.mockResolvedValueOnce({movie: {}})
		// mockResolvedValueOnce with empty movie obj
		// render the component
		// const { getByText, findByText } = render(<MovieDetails />)
		// execution
		// find the p tag
		// const noDetailsMessage = await findByText(/there are currently no details for this movie. please try another one!/i)
		// assertion
		// assert that the p tag is in the document
		// expect(noDetailsMessage).toBeInTheDocument()
	})

})

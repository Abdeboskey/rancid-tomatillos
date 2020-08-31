import React from 'react'
import App from './App'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { getMovies, getUserRatings } from '../apiCalls'
jest.mock('../apiCalls.js')

import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('App Component', () => {
	let getMoviesResolved;

	beforeEach(() => {
		getMoviesResolved = {
			movies: [
				{
					'id': 1,
					'poster_path': 'www.posterpath.com/poster1',
					'backdrop_path': 'www.posterpath.com/backdrop1',
					'title': 'Brave Little Toasty',
					'average_rating': 37,
					'release_date': '1988-07-16'
				},
				{
					'id': 2,
					'poster_path': 'www.posterpath.com/poster2',
					'backdrop_path': 'www.posterpath.com/backdrop2',
					'title': 'Hack3r5',
					'average_rating': 2,
					'release_date': '2020-08-15'
				},
				{
					'id': 3,
					'poster_path': 'www.posterpath.com/poster3',
					'backdrop_path': 'www.posterpath.com/backdrop3',
					'title': 'Jurassic Perks',
					'average_rating': 6,
					'release_date': '1994-03-24'
				}
			]
		}
	})
	it('should display all the movies when the app loads', async () => {
		getMovies.mockResolvedValueOnce(getMoviesResolved)

		const { findByText } = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		) 

		const movieOne = await findByText(/brave/i)
		const movieTwo = await findByText(/hack\w+/i)
		const movieThree = await findByText(/perks/i)

		expect(movieOne).toBeInTheDocument()
		expect(movieTwo).toBeInTheDocument()
		expect(movieThree).toBeInTheDocument()
	})

	it('should notify user of a server error', async () => {
		getMovies.mockRejectedValueOnce({
			status: 420
		})
		const { findByText } = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)

		const errorMessage = await findByText(/error status: 420/i);

		expect(errorMessage).toBeInTheDocument()
	})

	it('should notify user if there are no movies', async () => {
		getMovies.mockResolvedValueOnce({ movies: [] })
		const { findByText } = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)

		const noMoviesMessage = await findByText(/there are currently no movies to rate./i)

		expect(noMoviesMessage).toBeInTheDocument()
	})

	it('should get user ratings when user successfully logs in or changes a rating', async () => {
		getMovies.mockResolvedValueOnce(getMoviesResolved)
		getUserRatings.mockResolvedValueOnce({ ratings:
			[
				{ id: 1, user_id: 1, movie_id: 1, rating: 6, created_at: 'yesterday', updated_at: 'today' },
				{ id: 2, user_id: 2, movie_id: 2, rating: 10, created_at: 'days ago', updated_at: 'never' },
				{ id: 3, user_id: 3, movie_id: 3, rating: 3, created_at: 'now', updated_at: 'then' },
			]
		})

		const { findByText } = await render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)

		// execution
		// look for the correct user ratings on the page
		
		// assertion
		// expect them to be in the document
	})
	
})
import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { getMovies, getUserRatings, submitLoginCredentials, getFavoriteMovieIds } from '../apiCalls'
jest.mock('../apiCalls.js')

import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('App Component', () => {
	let getMoviesResolved, getUserRatingsResolved, submitLoginCredentialsResolved, getFavoriteMovieIdsResolved

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
		getUserRatingsResolved = {
			ratings:
				[
					{ id: 1, user_id: 1, movie_id: 1, rating: 66, created_at: 'yesterday', updated_at: 'today' },
					{ id: 2, user_id: 2, movie_id: 2, rating: 99, created_at: 'days ago', updated_at: 'never' },
					{ id: 3, user_id: 3, movie_id: 3, rating: 33, created_at: 'now', updated_at: 'then' }
				]
		}
		submitLoginCredentialsResolved = {
			'user': {
				'id': 36,
				'name': 'Twillie',
				'email': 'twillie@manillie.vanillie'
			}
		}
		getFavoriteMovieIdsResolved = [420]
	})

	it('should display all the movies when the app loads', async () => {
		getMovies.mockResolvedValueOnce(getMoviesResolved)

		const { findByText } = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
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
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)

		const errorMessage = await findByText(/error status: 420/i);

		expect(errorMessage).toBeInTheDocument()
	})

	it('should notify user if there are no movies', async () => {
		getMovies.mockResolvedValueOnce({ movies: [] })
		const { findByText } = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)

		const noMoviesMessage = await findByText(/there are currently no movies to view./i)

		expect(noMoviesMessage).toBeInTheDocument()
	})

	it('should get user ratings when user successfully logs in or changes a rating', async () => {
		getMovies.mockResolvedValueOnce(getMoviesResolved)
		const { getByRole, findByText, findByRole } = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)

		const logInButton = getByRole('link', {name: /log in/i})
		fireEvent.click(logInButton)

		const username = await findByText(/username/i)
		expect(username).toBeInTheDocument()
		
		submitLoginCredentials.mockResolvedValueOnce(submitLoginCredentialsResolved)
		getUserRatings.mockResolvedValueOnce(getUserRatingsResolved)
		getFavoriteMovieIds.mockResolvedValueOnce(getFavoriteMovieIdsResolved)

		const actionButton = await findByRole('button', {name: /action!/i})
		fireEvent.click(actionButton)
		
		const greeting = await findByText(/hello, twillie/i)
		expect(greeting).toBeInTheDocument()

		const userRating1 = await findByText(/33/)
		const userRating2 = await findByText(/66/)
		const userRating3 = await findByText(/99/)

		expect(userRating1).toBeInTheDocument()
		expect(userRating2).toBeInTheDocument()
		expect(userRating3).toBeInTheDocument()
	})

	it('should allow a user to post a rating', () => {
		// set up
		// fire event on the button click
		// check that submit rating was fired with the right arguments
		// mock resolved value of postRating 
	})

	it('should delete a rating when a user tries to post a new rating', () => {
		// set up
		// fire event on the button click
		// check that delete rating was fired with the right arguments
		// mock resolved value of deleteRating 
	})
	
})
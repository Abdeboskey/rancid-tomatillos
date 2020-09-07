import React from 'react'
import Ratings from './Ratings'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Ratings Component', () => {
	
	it('should show the correct content when rendered', () => {
		const mockHandleUserRatingInput = jest.fn()
		const mockSubmitRating = jest.fn()
		const mockChangeFavoriteStatus = jest.fn()

		render(
      <Ratings
        title="Rancid Tomatillos"
        poster="www.posterpath.com/poster"
        releaseDate="2021"
        averageRating={8}
        handleUserRatingInput={mockHandleUserRatingInput}
        isLoggedIn={true}
        movieId={1234}
        submitRating={mockSubmitRating}
        success={true}
        userId={2000}
        changeFavoriteStatus={mockChangeFavoriteStatus}
				userRating={4}
				isFavorite={true}
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
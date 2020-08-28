import React from 'react'
import Card from './Card'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BrowserRouter } from 'react-router-dom'

describe('Card Component', () => {

	it('should show the correct content when rendered logged out', () => {
		render(
			<BrowserRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={undefined}
					isLoggedIn={false}
				/>
			</BrowserRouter>
		)

		const title = screen.getByText(/im a title/i)
		const rating = screen.getByText(/10/)
		const poster = screen.getByAltText(/movie pOster/i)

		expect(title).toBeInTheDocument()
		expect(rating).toBeInTheDocument()
		expect(poster).toBeInTheDocument()
	})

	it('should show the correct content when rendered logged in', () => {
		render(
			<BrowserRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={{rating: 8}}
					isLoggedIn={true}
				/>
			</BrowserRouter>
		)

		const userRating = screen.getByText(/8/i)

		expect(userRating).toBeInTheDocument()
	})

	it('should route to correct path when poster is clicked', () => {
		render(
			<BrowserRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={{ rating: 8 }}
					isLoggedIn={true}
				/>
			</BrowserRouter>
		)

		const routePath = screen.getByRole('link', { href: /movies\/4/i })

		expect(routePath).toBeInTheDocument()
	})

})
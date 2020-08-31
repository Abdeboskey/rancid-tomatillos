import React from 'react'
import Card from './Card'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MemoryRouter } from 'react-router-dom'

describe('Card Component', () => {

	it('should show the correct content when rendered logged out', () => {
		render(
			<MemoryRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={undefined}
					isLoggedIn={false}
				/>
			</MemoryRouter>
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
			<MemoryRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={{rating: 8}}
					isLoggedIn={true}
				/>
			</MemoryRouter>
		)

		const userRating = screen.getByText(/8/i)

		expect(userRating).toBeInTheDocument()
	})

	it('should route to correct path when poster is clicked', () => {
		render(
			<MemoryRouter>
				<Card
					movieId={4}
					title='Im a title'
					poster='www.posterpath.com/poster'
					rating={10}
					userRating={{ rating: 8 }}
					isLoggedIn={true}
				/>
			</MemoryRouter>
		)

		const routePath = screen.getByRole('link', { href: /movies\/4/i })

		expect(routePath).toBeInTheDocument()
	})

})
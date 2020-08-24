import React from 'react'
import Billboard from './Billboard'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Billboard Component', () => {
	it('should show the correct content when rendered', () => {
		render(
			<Billboard
				backdrop='www.posterpath.com/backdrop'
				tagline='BEST. TAGLINE. EVER!'
			/>
		)

		const backdrop = screen.getByAltText(/movie backdrop/i)

		expect(backdrop).toBeInTheDocument()
	})
})
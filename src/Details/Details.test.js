import React from 'react'
import Details from './Details'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Details Component', () => {
	
	it('should show the correct content when rendered', () => {
		render(
			<Details
				overview='This film is about sad-boi brains'
				runtime='2hr 24min'
				genres={[' Science ', '/ Psychology ']}
				releaseDate='2/21/2020'
				budget={45000}
				revenue={13}
			/>
		)

		const overview = screen.getByText(/this film is about sad-boi brains/i)
		const runtime = screen.getByText(/2hr 24min/i)
		const genres = screen.getByText(/science \/ psychology/i)
		const releaseDate = screen.getByText(/2\/21\/2020/i)
		const budget = screen.getByText(/\$45,000.00/i)
		const revenue = screen.getByText(/\$13.00/i)

		expect(overview).toBeInTheDocument()
		expect(runtime).toBeInTheDocument()
		expect(genres).toBeInTheDocument()
		expect(releaseDate).toBeInTheDocument()
		expect(budget).toBeInTheDocument()
		expect(revenue).toBeInTheDocument()
	})

})
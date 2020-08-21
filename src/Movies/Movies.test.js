import React from 'react'
import Movies from './Movies'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Movies Component', () => {
  
  it('should be able to render a list of cards', () => {
    const movies = [
      {
        "id": 1,
        "poster_path": "www.posterpath.com/poster1",
				"backdrop_path": "www.posterpath.com/backdrop1",
        "title": "Brave Little Toasty",
        "average_rating": 37,
        "release_date": "1988-07-16"
      },
      {
        "id": 2,
				"poster_path": "www.posterpath.com/poster2",
				"backdrop_path": "www.posterpath.com/backdrop2",
        "title": "Hack3r5",
        "average_rating": 2,
        "release_date": "2020-08-15"
      },
      {
        "id": 3,
				"poster_path": "www.posterpath.com/poster3",
				"backdrop_path": "www.posterpath.com/backdrop3",
        "title": "Jurassic Perks",
        "average_rating": 6,
        "release_date": "1994-03-24"
      }
		]
		
		render(<Movies movies={movies} />)

		const title1 = screen.getByRole('heading', { name: 'Brave Little Toasty' })
		const title2 = screen.getByRole('heading', { name: 'Hack3r5' })
		const title3 = screen.getByRole('heading', { name: 'Jurassic Perks' })

		expect(title1).toBeInTheDocument()
		expect(title2).toBeInTheDocument()
		expect(title3).toBeInTheDocument()

	})
	
})
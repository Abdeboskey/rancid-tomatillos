import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getMovies } from '../apiCalls'
jest.mock('../apiCalls.js')

describe('App Component', () => {

  it('should display all the movies when the app loads', async () => {
    getMovies.mockResolvedValueOnce({ movies: [
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
    ]})
    
    const { getByText, findByText } = render(<App />)
    
    const moviesContainer = getByText(/view all movies/i)
    const movie = await findByText(/hack3r5/i)

    expect(moviesContainer).toBeInTheDocument()
    expect(movie).toBeInTheDocument()
  })

  // it('')

})

import React from 'react'
import Movies from './Movies'
import Card from '../Card/Card'
// import { screen, render } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow'
import '@testing-library/jest-dom'

describe('Movies Component', () => {
  
  it('should be able to render a list of cards', () => {
    const movies = [
      {
        "id": 149,
        "poster_path": "https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//qZ4NYuwME0j6QgJmIE6AZMgmCaj.jpg",
        "title": "Akira",
        "average_rating": 9,
        "release_date": "1988-07-16"
      },
      {
        "id": 437518,
        "poster_path": "https://image.tmdb.org/t/p/original//puVA7UoLuu7Q7OtGRWINhT2XpOB.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//z8PntmDQqNt8ertwoXQTFoMQg5u.jpg",
        "title": "Friend of the World",
        "average_rating": 1,
        "release_date": "2020-08-15"
      },
      {
        "id": 521034,
        "poster_path": "https://image.tmdb.org/t/p/original//5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
        "title": "The Secret Garden",
        "average_rating": 6,
        "release_date": "2020-07-08"
      }
    ]

    const renderer = new ShallowRenderer()
    renderer.render(<Movies movies={movies}/>)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('section')
    expect(result.props.children).toEqual([
      <Card
        key={149}
        title={"Akira"}
        poster={"https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg"}
        rating={9}
      />,
      <Card
        key={437518}
        title={'Friend of the World'}
        poster={'https://image.tmdb.org/t/p/original//puVA7UoLuu7Q7OtGRWINhT2XpOB.jpg'}
        rating={1}
      />,
      <Card
        key={521034}
        title={'The Secret Garden'}
        poster={'https://image.tmdb.org/t/p/original//5MSDwUcqnGodFTvtlLiLKK0XKS.jpg'}
        rating={6}
      />
    ]);
  })
})
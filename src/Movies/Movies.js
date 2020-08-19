import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

const Movies = () => {
	return (
		<section className='Movies-container'>
			<Card title='Brave Little Toaster' averageRating='8' poster='https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg'/>
			<Card title='Movie2' averageRating='10' poster='https://image.tmdb.org/t/p/original//eDnHgozW8vfOaLHzfpHluf1GZCW.jpg'/>
			<Card title='Akira' averageRating='10000' poster='https://image.tmdb.org/t/p/original//5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg'/>
		</section>
	)
}

export default Movies
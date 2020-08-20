import React from 'react'
import Card from './Card'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Card Component', () => {

	it('Should show the correct content when rendered', () => {
		// make sure there is a title, poster and rating
		// setup
		render(
			<Card
				poster='https://images.unsplash.com/photo-1592788174877-3f99727fd23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
				title='Im a title'
				rating={67}
			/>
		)

		// execution


		// assertion
	})

	it('Should', () => {
		// setup

		// execution

		// assertion
	})

})
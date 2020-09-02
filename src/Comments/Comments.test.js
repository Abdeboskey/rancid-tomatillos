import React from 'react';
import Comments from './Comments';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';

describe('Comments Component', () => {

  it('should be able to render a list of comments', () => {
    const comments = [
      {
        id: 1,
        comment: "Wow, I can't believe it ended like that",
        author: "Oprah",
      },
      {
        id: 2,
        comment: "I will never get that 2.5 hours of my life back",
        author: "Count Dracula",
      },
      {
        id: 3,
        comment: "I'm literally in tears right now. SO FUNNY. SO SAD.",
        author: "RoboCop",
      },
    ];

    render(
      <MemoryRouter>
        <Comments
          comments={comments}
        />
      </MemoryRouter>
    )

    const comment1 = screen.getByText(/believe/i)
    const comment2 = screen.getByText(/2.5 hours/i)
    const comment3 = screen.getByText(/literally/i)

    expect(comment1).toBeInTheDocument()
    expect(comment2).toBeInTheDocument()
    expect(comment3).toBeInTheDocument()

  })
  
})
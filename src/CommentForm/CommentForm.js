import React from 'react'
import '../scss/_CommentForm.scss'

// will need to update state in MovieDetails with the values of the fields. 
//// use handleCommentInput() passed as props from movie details. 
//// state will live in MovieDetails.
//// will fire postComment() on submit.
//// postComment() is passed down from MovieDetails.

const CommentForm = ({ comment, handleCommentInput, addComment }) => {
  return (
    <form 
      className='CommentForm'
      onSubmit={event => addComment(event)}
    >
      <input 
        className='Comment-input'
        type='text'
        value={comment}
        onChange={event => handleCommentInput(event)}
      />
      <button type='submit'>Comment!</button>
    </form>
  )

}

export default CommentForm
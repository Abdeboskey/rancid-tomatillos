import React from 'react'
import '../scss/_CommentForm.scss'

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
import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ comment, author }) => {
  return (
    <article className='Comment'>
      <p>{author} said:</p>
      <p>{comment}</p>
    </article>
  )
} 

export default Comment

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}
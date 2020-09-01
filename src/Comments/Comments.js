import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment/Comment'
import '../scss/_Comments.scss'

const Comments = ({ comments }) => {
  const commentsList = comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        comment={comment.comment}
        author={comment.author}
      />
    )
  })

  return (
    <section className='Comments-Container'>
      {commentsList.reverse()}
    </section>
  )
}

export default Comments

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}
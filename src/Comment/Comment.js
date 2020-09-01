import React from 'react '

const Comment = ({ comment, author }) => {
  return (
    <article className='Comment'>
      <p>{comment}</p>
      <p>{author}</p>
    </article>
  )
} 

export default Comment
import React, { Component } from 'react'
import '../scss/_CommentForm.scss'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
    }
  }

  handleCommentInput = (event) => {
    const inputValue = event.target.value
    this.setState({ comment: inputValue })
  }

  resetCommentInput = () => {
    this.setState({ comment: '' })
  } 

  render() {
    return (
      <form 
        className='CommentForm'
        onSubmit={event => {
          this.props.addComment(event, this.state.comment)
          this.resetCommentInput()
        }}
      >
        <input 
          className='Comment-input'
          type='text'
          placeholder='Add Comment Here'
          value={this.state.comment}
          onChange={event => this.handleCommentInput(event)}
        />
        <button type='submit'>Comment!</button>
      </form>
    )
  }

}

export default CommentForm
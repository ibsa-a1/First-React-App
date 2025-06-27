import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    } 
    commenthandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }   
  render() {
    return (
      <div>
        <form>
            <div>
                <label>username: </label>
                <input type="text" value={this.state.username} onChange={this.usernamehandler}/>
            </div>
            <div>
                <label>comment: </label>
                <textarea value={this.state.comment} onChange={this.commenthandler}></textarea>
            </div>
        </form>
      </div>
    )
  }
}

export default Form

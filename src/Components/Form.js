import React, { Component } from 'react'

class Form extends Component {

    // Step 1: Control our form by creating state
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         programmingLanguages: ''
      }
    }

    // Step 2: Handle the change by handler

    // Username Handler
    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    } 
    //Comment Handler
    commenthandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    } 
    // LIst Handler
    programmingLanguageshandler = (event) => {
        this.setState({
            programmingLanguages: event.target.value
        })
    }  
    // Submit button handler
    submithandler = (event) => {
        // event.preventDefault()
        alert(`${this.state.username} ${this.state.comment} ${this.state.programmingLanguages}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submithandler}>
            <div>
                <label>username: </label>
                <input type="text" value={this.state.username} onChange={this.usernamehandler}/>
            </div>
            <div>
                <label>comment: </label>
                <textarea value={this.state.comment} onChange={this.commenthandler}></textarea>
            </div>
            <div>
                <label>Programming Languages: </label>
                <select value={this.state.programmingLanguages} onChange={this.programmingLanguageshandler}>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="C++">C++</option>
                    <option value="React">React</option>
                </select>
                {/* The <select> tag in HTML is used to create a drop-down list in a form, 
                allowing users to choose one or more options from a predefined list. */}
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

//So, to change our HTML form to React form, we follow 2 steps:
    //Step 1: Control our form by creating state in the constructor
    //Step 2: Handle the change by handler

export default Form

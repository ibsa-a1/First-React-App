import React, { Component } from 'react'

export class Event_on_class extends Component {
    Handler (){
        alert("Button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.Handler}>Click</button>
      </div>
    )
  }
}

export default Event_on_class

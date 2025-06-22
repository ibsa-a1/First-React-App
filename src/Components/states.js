import React, { Component } from 'react'

class LinkedIn extends Component {
    constructor() {
      super()
    
      this.state = {
         channel: "Connect to my LinkedIn",
      }
    }
    
    
    mergeText(){
        this.setState({
            channel: "Thank you for connecting",
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={() => this.mergeText()}>CONNECT</button>
      </div>
    );
  }

}
export default LinkedIn

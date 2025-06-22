import React, { Component } from 'react'

class LinkedIn extends Component {
    constructor() {
      super()
    
      this.state = {
         channel: "Connect to my LinkedIn",
         isClicked: false,
      }
    }
    
    
    mergeText(){
        this.setState({
            channel: "Thank you for connecting",
            isClicked: true,
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        {!this.state.isClicked && <p>@ibsa_a1</p>}
        {!this.state.isClicked && (
            <button onClick={() => this.mergeText()}>CONNECT</button>
        )}
      </div>
    );
  }

}
export default LinkedIn

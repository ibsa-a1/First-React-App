import React, { Component } from 'react'

 class Event_Bind extends Component {
    constructor() {
      super()
    
      this.state = {
         message: "Event Binding Example"
      }
    }

    Handler(){
        this.setState({
            message: "Button clicked"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

{/* In React, we can't use <button onClick={this.Handler}>Click</button>
Here the Keyword this will make an error to use it as this.Handler as we use it in JavaScript. 
So we haveto use 2 methods to solve this error */}


            {/* 1. The first method is to use bind method. */}
        <button onClick={this.Handler.bind(this)}>Click</button>
       

            {/* 2. The second method is to use arrow functions. */}
        {/* <button onClick={() => this.Handler()}>Click</button> */}


        {/* We also Can use the below method to solve this error
            <button onClick={this.Handler}>Click</button>
        but we have to define first the method in the constructor, which is
        this.Handler = this.Hnadler.bind(this);
        This has to be defined in the constructor 
        
        and also this 3rd method is officially recommended by react by performance*/}


      </div>
    )
  }
}

export default Event_Bind

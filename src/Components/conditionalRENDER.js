import React, { Component } from 'react'


function TrafficLight({ color }) {
  if (color == 'red') {
    return <p style={{ color: 'red' }}>Stop!</p>;
  } else if (color == 'yellow') {
    return <p style={{ color: 'orange' }}>Prepare to stop.</p>;
  } else if (color == 'green') {
    return <p style={{ color: 'green' }}>Go!</p>;
  } else {
    return <p>Invalid light color.</p>;
  }
}

export default TrafficLight

{/*
    class ConditionalRender extends Component {

    constructor() {
      super()
    
      this.state = {
         isLogin: true
      }
    }
    

  render() {

    //#1. if statement

    if(this.state.isLogin){
        return <h1>Welcome User</h1>
    }else{
        return <h1>Please Login</h1>
    }



    //#2. Ternary operator

    // return this.state.isLogin ? (<h1>Welcome User</h1>) :(<h1>Please Login</h1>)



    //#3. Logical && operator

    // return (
    //   <div>
    //     {this.state.isLogin && <h1>Welcome User</h1>}
    //     {!this.state.isLogin && <h1>Please Login</h1>}
    //   </div>
    // )
  }

  //Here the 3rd, Logical && operator is not recommended because it only works for true conditions not for false conditions.
}

export default ConditionalRender
*/}

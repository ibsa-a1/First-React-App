import React from 'react'

function Event_func() {
    function Handler(){
        alert("Button clicked")
    }
  return (
    <div>
      <button onClick={Handler}>Click Me</button>
    </div>
  )
}

export default Event_func

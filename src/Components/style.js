import React from 'react'
import './style.css'

function Styles(props) {

    let className = props.heading ? 'heading' : ' ';

  return (
    <div>
      <h1 className={`${className} large-font`}>Styling React Components</h1>
    </div>
  )
}

export default Styles

import React from 'react'

function Button({handleClick, children}) {
    console.log('button rendering - ', children) // It helps to know how the components are rendering withou using useCallback Hook
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button) //This method will reduce somehow the rendering of the components.Button

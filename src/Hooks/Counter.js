import React from 'react'

function Counter({text, count}) {
    console.log(`Rendering ${text}`) // It helps to know how the components are rendering without using useCallback Hook
  return (
    <div>
      {text} - {count}
    </div>
  )
}

export default React.memo(Counter) //This method will reduce somehow the rendering of the components.

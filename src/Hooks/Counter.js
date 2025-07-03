import React from 'react'

function Counter({text, count}) {
    console.log(`Rendering ${text}`) // It helps to know how the components are rendering withou using useCallback Hook
  return (
    <div>
      {text} - {count}
    </div>
  )
}

export default Counter

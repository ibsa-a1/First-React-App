import React, { useState } from 'react'

//useState with current state and previous state
function UseStateCounter() {
    const initialCount = 0;
    const [count, countupdater] = useState(initialCount)
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick ={ () => countupdater(count + 1)}>Increment</button>
      <button onClick ={ () => countupdater(initialCount)}>Reset</button>
      <button onClick ={ () => countupdater(count - 1)}>Decrement</button>
    </div>
  )
}
/*
 * A component that displays a count that increments when a button is clicked.
 *
 * It uses the useState hook to store the count in component state.
 *
 * @returns {JSX.Element} A JSX element representing the component.
 */

export default UseStateCounter

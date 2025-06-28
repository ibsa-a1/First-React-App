import React, { useState } from 'react'


function UseStateCounter() {
    const [count, countupdater] = useState(0)
  return (
    <div>
      <button onClick ={ () => countupdater(count + 1)}>Count {count}</button>
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

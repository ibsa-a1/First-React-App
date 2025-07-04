import React, { useState, useMemo } from 'react'
import Subchild from './Subchild';

function UseMemo() {

    const [count, setCount] = useState(0);

    function clickHandler(){
        setCount(count + 1)
    }

    const memoizedvalue = useMemo(() => {
    return <Subchild></Subchild>;
    }, [])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={clickHandler}>Increment</button>
      {/* 
      <Subchild></Subchild> 
      This will be affected by the change in the count but it doesn't have to. */}
      {memoizedvalue}
      {/* This will not be affected by the change in the count */}
    </div>
  )
}

export default UseMemo

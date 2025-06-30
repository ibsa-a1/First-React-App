import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [counter, updatecounter] = useState(0);

    useEffect(() => {
        //document.title = `You clicked ${counter} times`;
        //The code that we want to run
        console.log('The Count is: ',counter)


        //Optional return function
    }, [counter])//The dependency Array. The code will run when the counter changes
  return (
    <div>
        <h1>You clicked:  {counter} times</h1>
      <button onClick={() => updatecounter(counter + 1)}> Click</button>
      <div><button onClick={() => updatecounter(0)}> Reset</button></div>
    </div>
  )
}

export default UseEffectHooks

import React, {useEffect, useRef, useState } from 'react'

function TimerWithRef() {
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000) // Here it counts every 1 second or 1000 milliseconds
        return () => clearInterval(intervalRef.current)
    }, [])

  return (
    <div>
      <h1>Timer - {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default TimerWithRef

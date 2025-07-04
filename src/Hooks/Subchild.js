import React, { useEffect } from 'react'

let renderCount = 0
function Subchild() {
    useEffect(() => {
        renderCount++
    })
  return (
    <div>
        <h3>Render Count: {renderCount}</h3>
    </div>
  )
}

export default Subchild

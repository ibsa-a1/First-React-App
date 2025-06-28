import React, { useState } from 'react'

function UseStatewithObject() {
    const [name, setName] = useState ({firstName: '', lastName: ''})
  return (
    <div>
      <form>
        <label>First Name: </label>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
        <label>Last Name: </label>
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
        {/* Here the ...name, operator (spread operator) helps to combine the two objects which are,
        the name.firstName and name.lastName. If we don't use the spread operator, when we input the first operator, the second will 
        disappear and if we input the second operator, the first will disappear. */}
        <h2>{name.firstName} {name.lastName}</h2>
      </form>
    </div>
  )
}

export default UseStatewithObject

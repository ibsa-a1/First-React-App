import React, { useState, useCallback } from 'react'
import Counter from './Counter';
import Button from './Button';

function UseCallback() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = useCallback(() => {
        setCounter1(counter1 + 1);
    }, [counter1]) // Here it will render only when the counter1 changes

    const increment2 = useCallback(() => {
        setCounter2(counter2 + 2);
    }, [counter2]) // And here also it will render only when the counter2 changes

  return (
    <div>
      <Counter text="Count by 1" count={counter1} />
      <Button handleClick={increment1}>+1</Button>

      <Counter text="Count by 2" count={counter2} />
      <Button handleClick={increment2}>+2</Button>
      {/* Here All components are rendering without using useCallback Hook and making a React app slower.
      It will be more slower if we have too many components */}
      {/* After using useCallback Hook, it will render only when the needed component changes and this also became successfull 
      with the help of React.memo()
      
      Here what we have to really understand is the useCallback Hook alone doesn't make any changes without the help of React.memo(*/}
    </div>
  )
}

export default UseCallback

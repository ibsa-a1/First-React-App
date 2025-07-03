import React, { useState } from 'react'
import Counter from './Counter';
import Button from './Button';

function UseCallback() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = () => {
        setCounter1(counter1 + 1);
    }
    const increment2 = () => {
        setCounter2(counter2 + 2);
    }

  return (
    <div>
      <Counter text="Count by 1" count={counter1} />
      <Button handleClick={increment1}>+1</Button>

      <Counter text="Count by 2" count={counter2} />
      <Button handleClick={increment2}>+2</Button>
      {/* Here All components are rendering without using useCallback Hook and making a React app slower.
      It will be more slower if we have too many components */}
    </div>
  )
}

export default UseCallback

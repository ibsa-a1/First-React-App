import React, {useEffect, useRef} from 'react'

function InputFocusWithUseRef() {
    const inputFocus = useRef(null);
    useEffect(() => {
        inputFocus.current.focus();
    }, [])
  return (
    <div>
      <input type="text" ref={inputFocus} />
    </div>
  )
}

export default InputFocusWithUseRef

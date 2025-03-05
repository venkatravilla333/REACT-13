import React, { useRef } from 'react'

function Uncontrolled() {
  var inputRef = useRef()
  
  var getData = () => {
    alert(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default Uncontrolled
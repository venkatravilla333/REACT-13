import React, { useRef, useState } from 'react'

function Value() {

  var normalVariable = 0

  var [stateVariable, setStatevariable] = useState(0)

  var value = useRef(0)

  var updateValue = () => {
    normalVariable++
    console.log(normalVariable)
    setStatevariable(stateVariable + 1)
    console.log(stateVariable)
    value.current++
    console.log(value.current)
  }
console.log('render')
  return (
    <div>
      <h3>Normal value: {normalVariable}</h3>
      <h3>State value: {stateVariable}</h3>
      <h3>Ref value: {value.current}</h3>
      <button onClick={updateValue}>update normal value</button>
    </div>
  )
}

export default Value
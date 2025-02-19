import React, { useEffect, useRef, useState } from 'react'

function Dom() {
  var inputRef = useRef(100)

 var [name, setName] = useState('')
  
  console.log('render')
  useEffect(() => {
    console.log('effect runs')
    inputRef.current.focus()
  }, [])

  var getValue = () => {
    console.log(inputRef.current.value)
    setName(inputRef.current.value)
  }
  return (
    <div>
      <h3>{name}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Dom
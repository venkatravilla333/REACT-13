import React, { useEffect, useState } from 'react'

function Parent() {
 var [x, setX] = useState(0)
  var [y, setY] = useState(0)

  let updateState = (e) => {
    console.log('update state')
    setX(e.clientX)
    setY(e.clientY)
  }

  console.log('render')
  
  useEffect(() => {
    console.log('effect runs')
    window.addEventListener('mousemove', updateState)
  }, [])

  return (
    <div>
      <h2>X : {x}</h2>
      <h2>Y : {y}</h2>
    </div>
  )
}

export default Parent
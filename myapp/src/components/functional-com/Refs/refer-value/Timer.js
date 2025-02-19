import React, { useEffect, useRef, useState } from 'react'

function Timer() {
  var [value, setTimer] = useState(0)
  var timer = useRef()
  useEffect(() => {
   timer.current = setInterval(() => {
      setTimer(value+1)
    }, 1000)
    return () => {
      clearInterval(timer.current)
    }
  })
  return (
    <div>
      <h2>Timer: {value}</h2>
      <button onClick={()=>clearInterval(timer.current)}>stop</button>
    </div>
  )
}

export default Timer
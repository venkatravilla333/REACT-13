import React, { useState } from 'react'
import useCount from './custom-hooks/useCount'

function Count2() {

  // var [count, setCount] = useState(0)
  
  // let increaseCount = () => {
  //   setCount(count+1)
  // }

  var [count, increaseCount] = useCount()
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseOver={increaseCount}>increase count1</button>
    </div>
  )
}

export default Count2
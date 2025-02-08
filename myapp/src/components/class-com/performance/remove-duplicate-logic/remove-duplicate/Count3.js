import React, { useState } from 'react'
import useCount from './custom-hooks/useCount'

function Count3() {

  // var [count, setCount] = useState(0)
  
  // let increaseCount = () => {
  //   setCount(count+1)
  // }

 var [count, increaseCount] = useCount()
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onDoubleClick={increaseCount}>increase count1</button>
    </div>
  )
}

export default Count3
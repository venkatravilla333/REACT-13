import React, { useState } from 'react'

function Count2() {

  var [count, setCount] = useState(0)
  
  let increaseCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseOver={increaseCount}>increase count1</button>
    </div>
  )
}

export default Count2
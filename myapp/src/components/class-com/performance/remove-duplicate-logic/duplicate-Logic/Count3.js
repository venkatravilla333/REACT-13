import React, { useState } from 'react'

function Count3() {

  var [count, setCount] = useState(0)
  
  let increaseCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onDoubleClick={increaseCount}>increase count1</button>
    </div>
  )
}

export default Count3